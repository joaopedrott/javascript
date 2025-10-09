import { Hono } from 'hono'

import { zValidator } from '@hono/zod-validator'

import { sessionMiddleware } from '../auth/sessionMiddleware'
import { createTeamSchema } from './schemas/create-team'

import { prisma } from '@/lib/prisma'
import { MemberRole, TaskStatus } from '@prisma/client'
import { updateTeamSchema } from './schemas/update-team'
import { generateInviteCode } from '@/lib/utils'
import { joinTeamSchema } from './schemas/join-team'
import { endOfMonth, startOfMonth, subMonths } from 'date-fns'



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
  .get(
      '/:teamId/analytics',
      sessionMiddleware,
      async (c) => {
        const user = c.get('user')
        const { teamId } = c.req.param()
  
        const member = await prisma.member.findFirst({
          where: {
            userId: user.id,
            teamId
          }
        })
  
        if (!member) {
          return c.json({ error: 'Não autorizado' }, 403)
        }
  
        const now = new Date()
        const currentMonthStart = startOfMonth(now)
        const currentMonthEnd = endOfMonth(now)
        const lastMonthStart = startOfMonth(subMonths(now, 1))
        const lastMonthEnd = endOfMonth(subMonths(now, 1))
  
        const currentMonthTasks = await prisma.task.findMany({
          where: {
            teamId,
            createdAt: {
              gte: currentMonthStart.toISOString(),
              lt: currentMonthEnd.toISOString()
            }
          }
        })
  
        const lastMonthTasks = await prisma.task.findMany({
          where: {
            teamId,
            createdAt: {
              gte: lastMonthStart.toISOString(),
              lt: lastMonthEnd.toISOString()
            }
          }
        })
  
        const taskCount = currentMonthTasks.length
        const taskDifference = taskCount - lastMonthTasks.length
  
        const currentMonthAssignedTasks = await prisma.task.findMany({
          where: {
            teamId,
            assigneeId: member.userId,
            createdAt: {
              gte: currentMonthStart.toISOString(),
              lt: currentMonthEnd.toISOString()
            }
          }
        })
  
        const lastMonthAssignedTasks = await prisma.task.findMany({
          where: {
            teamId,
            assigneeId: member.userId,
            createdAt: {
              gte: lastMonthStart.toISOString(),
              lt: lastMonthEnd.toISOString()
            }
          }
        })
  
        const assignedTaskCount = currentMonthAssignedTasks.length
        const assignedTaskDifference = assignedTaskCount - lastMonthAssignedTasks.length
  
        const currentMonthIncompleteTasks = await prisma.task.findMany({
          where: {
            teamId,
            status: {
              not: TaskStatus.DONE
            },
            createdAt: {
              gte: currentMonthStart.toISOString(),
              lt: currentMonthEnd.toISOString()
            }
          }
        })
  
        const lastMonthIncompleteTasks = await prisma.task.findMany({
          where: {
            teamId,
            status: {
              not: TaskStatus.DONE
            },
            createdAt: {
              gte: lastMonthStart.toISOString(),
              lt: lastMonthEnd.toISOString()
            }
          }
        })
  
        const incompleteTaskCount = currentMonthIncompleteTasks.length
        const incompleteTaskDifference = incompleteTaskCount - lastMonthIncompleteTasks.length
  
        const currentMonthCompleteTasks = await prisma.task.findMany({
          where: {
            teamId,
            status: TaskStatus.DONE,
            createdAt: {
              gte: currentMonthStart.toISOString(),
              lt: currentMonthEnd.toISOString()
            }
          }
        })
  
        const lastMonthCompleteTasks = await prisma.task.findMany({
          where: {
            teamId,
            status: TaskStatus.DONE,
            createdAt: {
              gte: lastMonthStart.toISOString(),
              lt: lastMonthEnd.toISOString()
            }
          }
        })
  
        const completeTaskCount = currentMonthCompleteTasks.length
        const completeTaskDifference = completeTaskCount - lastMonthCompleteTasks.length
  
        const currentMonthOverdueTasks = await prisma.task.findMany({
          where: {
            teamId,
            status: {
              not: TaskStatus.DONE
            },
            dueDate: {
              lt: now.toISOString()
            },
            createdAt: {
              gte: currentMonthStart.toISOString(),
              lt: currentMonthEnd.toISOString()
            }
          }
        })
  
        const lastMonthOverdueTasks = await prisma.task.findMany({
          where: {
            teamId,
            status: {
              not: TaskStatus.DONE
            },
            dueDate: {
              lt: now.toISOString()
            },
            createdAt: {
              gte: lastMonthStart.toISOString(),
              lt: lastMonthEnd.toISOString()
            }
          }
        })
  
        const overdueTaskCount = currentMonthOverdueTasks.length
        const overdueTaskDifference = overdueTaskCount - lastMonthOverdueTasks.length
  
        return c.json({
          data: {
            taskCount,
            taskDifference,
            assignedTaskCount,
            assignedTaskDifference,
            incompleteTaskCount,
            incompleteTaskDifference,
            completeTaskCount,
            completeTaskDifference,
            overdueTaskCount,
            overdueTaskDifference
          }
        })
      }
    )


export default app