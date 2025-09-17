import { Hono } from "hono";
import { sessionMiddleware } from "../auth/sessionMiddleware";
import { zValidator } from "@hono/zod-validator";
import { createProjectSchema } from "./schemas/create-project-schema";
import { prisma } from "@/lib/prisma";

const app = new Hono()
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

export default app