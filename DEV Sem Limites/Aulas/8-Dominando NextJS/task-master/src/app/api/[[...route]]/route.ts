import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import teams from '@/modules/teams/route'
import files from '@/modules/files/route'
import members from '@/modules/members/route'
import projects from '@/modules/projects/route'

const app = new Hono().basePath('/api')

const routes = app
.route('/teams', teams)
.route('/files', files)
.route('/members', members)
.route('/projects', projects)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes