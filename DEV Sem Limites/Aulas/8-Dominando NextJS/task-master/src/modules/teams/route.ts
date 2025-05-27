import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'

import { sessionMiddleware } from '../auth/sessionMiddleware'
import { createTeamSchema } from './schemas/create-team'

import { prisma } from '@/lib/prisma'
import { MemberRole } from '@prisma/client'
import { updateTeamSchema } from './schemas/update-team'
import { generateInviteCode } from '@/lib/utils'
import { joinTeamSchema } from './schemas/join-team'



const app = new Hono()
  .get('/', sessionMiddleware, async (c) => {
    const user = c.get('user')

    const members = await prisma.member.findMany({
      where: {
        userId: user.id as string
      },
      include: {
        team: true
      }
    })

    const teams = members.map(member => ({
      ...member.team
    }))

    return c.json({
      data: teams
    })
  })
  .post(
    '/', 
    sessionMiddleware,
    zValidator('json', createTeamSchema),
    async (c) => {
      const user = c.get('user')

      const { name, image } = c.req.valid('json')

      const team = await prisma.team.create({
        data: {
          name,
          userId: user.id as string,
          inviteCode: generateInviteCode(6),
          image: image as string
        }
      })

      await prisma.member.create({
        data: {
          userId: user.id as string,
          teamId: team.id,
          role: MemberRole.ADMIN
        }
      })

      return c.json({
        data: team
      })
    }
  )
  .post(
    '/:teamId/reset-invite-code',
    sessionMiddleware,
    async (c) => {
      const user = c.get('user')

      const { teamId } = c.req.param()

      const member = await prisma.member.findFirst({
        where: {
          userId: user.id as string,
          teamId
        }
      })

      if(!member || member.role !== MemberRole.ADMIN) {
        return c.json({
            message: 'Voce nao tem permissao para atualizar o codigo de convite'
        }, 403)

      }

      const team = await prisma.team.update({
        where: {
          id: teamId
        },
        data: {
          inviteCode: generateInviteCode(6)
        }
      })
      return c.json({
        data: team
      })
    }
  )
    .post(
    '/:teamId/join',
    sessionMiddleware,
    zValidator('json', joinTeamSchema),
    async (c) => {
      const user = c.get('user')

      const { teamId } = c.req.param()
      const { inviteCode } = c.req.valid('json')

      const member = await prisma.member.findFirst({
        where: {
          userId: user.id,
          teamId
        }
      })

      if (member) {
        return c.json({ error: 'Você já é membro deste time' }, 400)
      }

      const team = await prisma.team.findUnique({
        where: {
          id: teamId
        }
      })

      if (!team || team.inviteCode !== inviteCode) {
        return c.json({ error: 'Código de convite inválido' }, 400)
      }

      await prisma.member.create({
        data: {
          userId: user.id as string,
          teamId,
          role: MemberRole.MEMBER
        }
      })

      return c.json({
        data: team
      })
    }
  )
  .patch(
    '/:teamId',
    sessionMiddleware,
    zValidator('json', updateTeamSchema),
    async (c) => {
      const user = c.get('user')

      const { teamId } = c.req.param()
      const { name, image } = c.req.valid('json')

      const member = await prisma.member.findFirst({
        where: {
          userId: user.id as string,
          teamId
        }
      })

      if(!member || member.role !== MemberRole.ADMIN) {
        return c.json({
          error: {
            message: 'You are not allowed to update this team'
          }
        }, 403)

      }

      const team = await prisma.team.update({
        where: {
          id: teamId
        },
        data: {
          name,
          image: image as string
        }
      })

      return c.json({
        data: team
      })
    }

  )
  .delete(
    '/:teamId',
    sessionMiddleware,
    async (c) => {
      const user = c.get('user')

      const { teamId } = c.req.param()

      const member = await prisma.member.findFirst({
        where: {
          userId: user.id as string,
          teamId
        }
      })

      if(!member || member.role !== MemberRole.ADMIN) {
        return c.json({
          error: {
            message: 'You are not allowed to update this team'
          }
        }, 403)

      }

      await prisma.team.delete({
        where: {
          id: teamId
        }
      })

      return c.json({
        data: {
          id: teamId
        }
      })
    }
  )


export default app