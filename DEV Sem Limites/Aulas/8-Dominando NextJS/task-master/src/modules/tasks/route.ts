import { Hono } from "hono";
import { sessionMiddleware } from "../auth/sessionMiddleware";
import { zValidator } from "@hono/zod-validator";
import { createTaskSchema } from "./schemas/create-task";
import { prisma } from "@/lib/prisma";
import { getTasksSchema } from "./schemas/get-tasks";

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

export default app