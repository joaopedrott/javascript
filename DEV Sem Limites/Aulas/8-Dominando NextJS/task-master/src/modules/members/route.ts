import { Hono } from 'hono'
import { sessionMiddleware } from '../auth/sessionMiddleware';
import { zValidator } from '@hono/zod-validator';
import { getMembersSchema } from './schemas/get-members';
import { prisma } from '@/lib/prisma';


// /members?reamId=123&admin=true - Query Params ou Query String
// /members/1 - Route Params

const app = new Hono()
.get(
    '/',
    sessionMiddleware,
    zValidator('query', getMembersSchema),
    async (c) => {
        const user = c.get('user')

        const { teamId } = c.req.valid('query')
        
        const member = await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId,
            },
        })

        if (!member) {
            return c.json({ error: 'Voce nao eh membro do time' }, 403)
        }

        const members = await prisma.member.findMany({
            where: {
                teamId,
            },
            include: {
                user: true,
            },
        })

        return c.json({
            data: members
        })
    }
);

export default app;
