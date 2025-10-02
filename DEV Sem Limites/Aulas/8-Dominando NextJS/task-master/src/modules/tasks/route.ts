import { Hono } from "hono";
import { sessionMiddleware } from "../auth/sessionMiddleware";
import { zValidator } from "@hono/zod-validator";
import { createTaskSchema } from "./schemas/create-task";
import { prisma } from "@/lib/prisma";
import { getTasksSchema } from "./schemas/get-tasks";
import { moveTasksSchema } from "./schemas/move-tasks";

const TASK_POSITION_UNIT = 1000

function removeUndefined (obj: Record<string, any>) {
    return Object.fromEntries(
        Object.entries(obj).filter(([, v]) => (v !== undefined || v !== null))
    )

}

const app = new Hono()
.get(
    "/", 
    sessionMiddleware,
    zValidator("query", getTasksSchema),
    async (c) => {
        const user = c.get('user')

        const { 
            teamId,
            projectId,
            status,

            assigneeId,
            dueDate 
        } = c.req.valid('query')

        const member= await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId
            }
        })

        if (!member) {
            return c.json({ error: 'Nao autorizado' }, 403)
        }

        const tasks = await prisma.task.findMany({
            where: removeUndefined({
                teamId,
                projectId,
                status,
                assigneeId,
                dueDate,

            }),
            include: {
                assignee: true,
                project: true,

            },
            orderBy: {
                position: 'desc'
            }
        })

        return c.json({data: tasks})
    }
    )
.get(
    "/:taskId", 
    sessionMiddleware,
    async (c) => {
        const user = c.get('user')
        const { taskId } = c.req.param()
        
        const tasks = await prisma.task.findUnique({
            where: {
                id: taskId
            },
            include: {
                assignee: true,
                project: true,
            }
        })

        if (!tasks) {
            return c.json({ error: 'Tarefa nao encontrada' }, 404)
        }

        const member= await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId: tasks.teamId
            }
        })

        if (!member) {
            return c.json({ error: 'Nao autorizado' }, 403)
        }



        return c.json({data: tasks})
    }
    )
  .post(
    "/",
    sessionMiddleware,
    zValidator("json", createTaskSchema),
    async (c) => {
        const user = c.get('user')

        const {
            name,
            status,
            teamId,
            projectId,
            assigneeId,
            dueDate,
            description,
        } = c.req.valid('json')

        const member = await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId
            }
        })

        if (!member) {
            return c.json({ error: 'Nao autorizado' }, 403)
        }


        const highestPositionTask = await prisma.task.findFirst({
            where: {
                teamId,
                status
            },
            orderBy: {
                position: 'asc'
            }
        })


        const newPosition = highestPositionTask 
            ? highestPositionTask.position + TASK_POSITION_UNIT : TASK_POSITION_UNIT

            const task = await prisma.task.create({
                data: {
                    name,
                    status,
                    teamId,
                    projectId,
                    assigneeId,
                    dueDate,
                    description,
                    position: newPosition
                }
            })

            return c.json({
                data: task
            })
    }
  )
  .patch(
    "/:taskId",
    sessionMiddleware,
    zValidator("json", createTaskSchema.partial()),
    async (c) => {
        const user = c.get('user')

        const { 
            name,
            status,
            projectId,
            dueDate,
            description,
            assigneeId

        } = c.req.valid('json')

        const { taskId } = c.req.param()

        const existingTask = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        })

        if (!existingTask) {
            return c.json({ error: 'Tarefa nao encontrada' }, 404)
        }

        const member = await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId: existingTask.teamId
            }
        })

        if (!member) {
            return c.json({ error: 'Nao autorizado' }, 403)
        }

        const task = await prisma.task.update({
            where: {
                id: taskId
            },
            data: {
                name,
                status,
                projectId,
                dueDate,
                description,
                assigneeId
            }
        })

        return c.json({
            data: task
        })
    }
  )
  .delete(
    "/:taskId",
    sessionMiddleware,
    async (c) => {
        const user = c.get('user')

        const { taskId } = c.req.param()

        const existingTask = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        })

        if (!existingTask) {
            return c.json({ error: 'Tarefa nao encontrada' }, 404)
        }

        const member = await prisma.member.findFirst({
            where: {
                userId: user.id,
                teamId: existingTask.teamId
            }
        })

        if (!member) {
            return c.json({ error: 'Nao autorizado' }, 403)
        }

        await prisma.task.delete({
            where: {
                id: taskId
            }
        })

        return c.json({ data: { id: taskId } })
    }
  )
  .post(
      '/move',
      sessionMiddleware,
      zValidator('json', moveTasksSchema),
      async (c) => {
          const user = c.get('user')
          const { tasks } = c.req.valid('json')
        
          const taskIds = tasks.map(task => task.id)

          const tasksToUpdate = await prisma.task.findMany({
              where: {
                  id: {
                      in: taskIds
                  }
              },
              orderBy: {
                  position: 'asc'
              }
          })

          const teamIds = new Set(tasksToUpdate.map(task => task.teamId))

          if(teamIds.size !== 1) {
              return c.json({ error: 'Todas as tarefas devem pertencer ao mesmo time' }, 403)
          }

          const teamId = teamIds.values().next().value as string

          const member = await prisma.member.findFirst({
              where: {
                  userId: user.id,
                  teamId
              }
          })

          if (!member) {
              return c.json({ error: 'Nao autorizado' }, 403)
          }

          const updatedTasks = await Promise.all(
            tasks.map(async ({ id, status, position}) => {
                return await prisma.task.update({
                    where: {
                        id
                    },
                    data: {
                        status,
                        position
                    }
                })
            })
          )

          return c.json({ data: updatedTasks })
      }
  )
export default app