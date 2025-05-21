import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'

import { sessionMiddleware } from '../auth/sessionMiddleware'
import { createTeamSchema } from './schemas/create-team'

import { prisma } from '@/lib/prisma'
import { MemberRole } from '@prisma/client'
import { updateTeamSchema } from './schemas/update-team'

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
          inviteCode: 'abc123',
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