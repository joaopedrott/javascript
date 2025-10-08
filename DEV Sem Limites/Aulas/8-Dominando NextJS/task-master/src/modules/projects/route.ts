import { Hono } from "hono";
import { sessionMiddleware } from "../auth/sessionMiddleware";
import { zValidator } from "@hono/zod-validator";
import { createProjectSchema } from "./schemas/create-project";
import { prisma } from "@/lib/prisma";
import { getProjectsSchema } from "./schemas/get-project";
import { updateProjectSchema } from "./schemas/update-project";
import { endOfMonth, startOfMonth, subMonths } from "date-fns";
import { TaskStatus } from "@prisma/client";


const app = new Hono()
    .get('/', sessionMiddleware, zValidator('query', getProjectsSchema),
        async (c) => {
            const user = c.get('user')

            const { teamId } = c.req.valid('query')

            const member = await prisma.member.findFirst({
                where: {
                    userId: user.id,
                    teamId
                }
            })

            if (!member) {
                return c.json({ error: 'Nao autorizado, usuario nao eh membro do time' }, 403)
            }

            const projects = await prisma.project.findMany({
                where: {
                    teamId
                },
                orderBy: {
                    createdAt: 'asc'
                }
            })
            return c.json({
                data: projects
            })
        }
    )
    .get('/:projectId', sessionMiddleware,
        async (c) => {
            const user = c.get('user')

            const { projectId } = c.req.param()

            const project = await prisma.project.findUnique({
                where: {
                    id: projectId
                }
            })

            if (!project) {
                return c.json({ error: 'Projeto nao encontrado' }, 404)
            }

            const member = await prisma.member.findFirst({
                where: {
                    userId: user.id,
                    teamId: project.teamId
                }
            })

            if (!member) {
                return c.json({ error: 'Nao autorizado, usuario nao eh membro do time' }, 403)
            }

            return c.json({
                data: project
            })
        }
    )
    .post(
        '/',
        sessionMiddleware,
        zValidator('json', createProjectSchema),
        async (c) => {
            const user = c.get('user')

            const { name, teamId, image } = c.req.valid('json')

            const member = await prisma.member.findFirst({
                where: {
                    userId: user.id,
                    teamId
                }
            })

            if (!member) {
                return c.json({ error: 'Nao autorizado' }, 401)
            }

            const project = await prisma.project.create({
                data: {
                    name,
                    teamId,
                    image: image as string
                }
            })

            return c.json({
                data: project
            })
        }
    )
    .patch(
        '/:projectId',
        sessionMiddleware,
        zValidator('json', updateProjectSchema),
        async (c) => {
            const user = c.get('user')

            const { projectId } = c.req.param()
            const { name, image } = c.req.valid('json')

            const project = await prisma.project.findUnique({
                where: {
                    id: projectId
                }
            })

            if (!project) {
                return c.json({ error: 'Projeto nao encontrado' }, 404)
            }

            const member = await prisma.member.findFirst({
                where: {
                    userId: user.id,
                    teamId: project.teamId
                }
            })

            if (!member) {
                return c.json({ error: 'Nao autorizado' }, 401)
            }

            const updatedProject = await prisma.project.update({
                where: {
                    id: projectId
                },
                data: {
                    name,
                    image: image as string
                }
            })

            return c.json({
                data: updatedProject
            })
        }
    )
    .delete(
        '/:projectId',
        sessionMiddleware,
        async (c) => {
            const user = c.get('user')

            const { projectId } = c.req.param()

            const project = await prisma.project.findUnique({
                where: {
                    id: projectId
                }
            })

            if (!project) {
                return c.json({ error: 'Projeto nao encontrado' }, 404)
            }

            const member = await prisma.member.findFirst({
                where: {
                    userId: user.id,
                    teamId: project.teamId
                }
            })

            if (!member) {
                return c.json({ error: 'Nao autorizado' }, 401)
            }

            await prisma.project.delete({
                where: {
                    id: projectId
                }
            })

            return c.json({data: {id: projectId}})
        }
    )
    .get(
        '/:projectId/analytics',
        sessionMiddleware,
        async (c) => {
            const user = c.get('user')
            const { projectId } = c.req.param()

            const project = await prisma.project.findUnique({
                where: {
                    id: projectId
                }
            })

            if (!project) {
                return c.json({ error: 'Projeto nao encontrado' }, 404)
            }

            const member = await prisma.member.findFirst({
                where: {
                    userId: user.id,
                    teamId: project.teamId
                }
            })

            if (!member) {
                return c.json({ error: 'Nao autorizado' }, 403)
            }

            const now = new Date()
            const currentMonthStart = startOfMonth(now)
            const currentMonthEnd = endOfMonth(now)
            const lastMonthStart = startOfMonth(subMonths(now, 1))
            const lastMonthEnd = endOfMonth(subMonths(now, 1))

            const currentMonthTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    createdAt: {
                        gte: currentMonthStart.toISOString(),
                        lte: currentMonthEnd.toISOString()
                    }
                }
            })

            const lastMonthTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    createdAt: {
                        gte: lastMonthStart.toISOString(),
                        lte: lastMonthEnd.toISOString()
                    }
                }
            })

            const taskCount = currentMonthTasks.length
            const taskDifference = taskCount - lastMonthTasks.length

            const currentMonthAssignedTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    assigneeId: member.userId,
                    createdAt: {
                        gte: currentMonthStart.toISOString(),
                        lte: currentMonthEnd.toISOString()
                    }
                }
            })

            const lastMonthAssignedTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    assigneeId: member.userId,
                    createdAt: {
                        gte: lastMonthStart.toISOString(),
                        lte: lastMonthEnd.toISOString()
                    }
                }
            })


            const assignedTaskCount = currentMonthAssignedTasks.length
            const assignedTaskDifference = assignedTaskCount - lastMonthAssignedTasks.length
            
            const currentMonthIncompleteTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    status: {
                        not: TaskStatus.DONE
                    },
                    createdAt: {
                        gte: currentMonthStart.toISOString(),
                        lte: currentMonthEnd.toISOString()
                    }
                }
            })

            const lastMonthIncompleteTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    status: {
                        not: TaskStatus.DONE
                    },
                    createdAt: {
                        gte: lastMonthStart.toISOString(),
                        lte: lastMonthEnd.toISOString()
                    }
                }
            })

            const incompleteTaskCount = currentMonthIncompleteTasks.length
            const incompleteTaskDifference = incompleteTaskCount - lastMonthIncompleteTasks.length

            const currentMonthCompleteTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    status: TaskStatus.DONE,
                    createdAt: {
                        gte: currentMonthStart.toISOString(),
                        lte: currentMonthEnd.toISOString()
                    }
                }
            })

            const lastMonthCompleteTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    status: TaskStatus.DONE,
                    createdAt: {
                        gte: lastMonthStart.toISOString(),
                        lte: lastMonthEnd.toISOString()
                    }
                }
            })

            const completeTaskCount = currentMonthCompleteTasks.length
            const completeTaskDifference = completeTaskCount - lastMonthCompleteTasks.length
        
            const currentMonthOverdueTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    status: {
                        not: TaskStatus.DONE
                    },
                    dueDate: {
                        lt: now.toISOString()
                    },
                    createdAt: {
                        gte: currentMonthStart.toISOString(),
                        lte: currentMonthEnd.toISOString()
                    }
                }
            })

            const lastMonthOverdueTasks = await prisma.task.findMany({
                where: {
                    projectId,
                    status: {
                        not: TaskStatus.DONE
                    },
                    dueDate: {
                        lt: now.toISOString()
                    },
                    createdAt: {
                        gte: lastMonthStart.toISOString(),
                        lte: lastMonthEnd.toISOString()
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