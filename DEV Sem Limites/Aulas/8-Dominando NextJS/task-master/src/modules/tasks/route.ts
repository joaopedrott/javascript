import { Hono } from "hono";
import { sessionMiddleware } from "../auth/sessionMiddleware";
import { zValidator } from "@hono/zod-validator";
import { createTaskSchema } from "./schemas/create-task";
import { prisma } from "@/lib/prisma";

const TASK_POSITION_UNIT = 1000

const app = new Hono()
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