import { Hono } from "hono";
import { sessionMiddleware } from "../auth/sessionMiddleware";
import { zValidator } from "@hono/zod-validator";
import { createProjectSchema } from "./schemas/create-project";
import { prisma } from "@/lib/prisma";
import { getProjectsSchema } from "./schemas/get-project";


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

export default app