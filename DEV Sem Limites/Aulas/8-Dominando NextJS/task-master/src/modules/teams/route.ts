import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'

import { sessionMiddleware } from '../auth/sessionMiddleware'
import { createTeamSchema } from './schemas/create-team'
import { prisma } from '@/lib/prisma'
import { MemberRole } from '@prisma/client'

const app = new Hono().get('/',sessionMiddleware, (c) => {
  return c.json({
    message: 'Hello from teams route!',
  })
})
.post('/', sessionMiddleware,
  zValidator('json', createTeamSchema), 
  async (c)=> {
    const user = c.get('user')

    const { name, image } = c.req.valid('json')

    const team = await prisma.team.create({
      data: {
        name,
        userId: user.id as string,
        inviteCode: 'abc123',
        image: image as  string,
      },
    })


    await prisma.member.create({
      data: {
        userId: user.id as string,
        teamId: team.id,
        role: MemberRole.ADMIN
      },
    })

    return c.json({
      data: team
    })
  }
)



export default app