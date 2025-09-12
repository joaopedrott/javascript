import { Hono } from 'hono'
import { sessionMiddleware } from '../auth/sessionMiddleware';
import { zValidator } from '@hono/zod-validator';
import { getMembersSchema } from './schemas/get-members';
import { prisma } from '@/lib/prisma';
import { MemberRole } from '@prisma/client';
import { updateMemberRole } from './schemas/update-member-role';


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
)
.delete(
    '/:memberId',
    sessionMiddleware,
    async (c) => {
        const {memberId} = c.req.param()
        const user = c.get('user')

        const memberToDelete = await prisma.member.findUnique({
            where: {
                id: memberId
            }
        })

        if(!memberToDelete) {
            return c.json({error: 'Membro nao encontrado'}, 404)
        }

        const member = await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId: memberToDelete.teamId
            }
        })

        if(!member) {
            return c.json({error: 'Nao autorizado'}, 401)
        }

        if(member.id !== memberToDelete.id && member.role !== MemberRole.ADMIN) {
            return c.json({error: 'Nao autorizado'}, 401)
        }

        const allMembersInTeam = await prisma.member.findMany({
            where: {
            teamId: memberToDelete.teamId

            }
        })
        
        if(allMembersInTeam.length === 1) {
            return c.json({error: 'Nao eh possivel excluir o ultimo membro do time'}, 400)
        }

        await prisma.member.delete({
            where: {
                id: memberId
            }
        })

        return c.json({ data:{
            id: memberId
        }  })

    }
    
)
.patch(
    '/:memberId',
    sessionMiddleware,
    zValidator('json', updateMemberRole),
    async (c) => {
        const {memberId} = c.req.param()
        const user = c.get('user')
        const { role } = c.req.valid('json')

        const memberToUpdate = await prisma.member.findUnique({
            where: {
                id: memberId
            }
        })

        if(!memberToUpdate) {
            return c.json({error: 'Membro nao encontrado'}, 404)
        }

        const member = await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId: memberToUpdate.teamId
            }
        })

        if(!member) {
            return c.json({error: 'Nao autorizado'}, 401)
        }

        if(member.role !== MemberRole.ADMIN) {
            return c.json({error: 'Nao autorizado'}, 401)
        }

        const allMembersInTeam = await prisma.member.findMany({
            where: {
            teamId: memberToUpdate.teamId

            }
        })
        
        if(allMembersInTeam.length === 1) {
            return c.json({error: 'Voce nao pode atualizar o ultimo membro do time'}, 401)
        }

        await prisma.member.update({
            where: {
                id: memberId
            },
            data: {
                role
            }
        })

        return c.json({ data:{
            id: memberId
        }  })

    }
    
);

export default app;
