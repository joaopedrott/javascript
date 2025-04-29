import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import teams from '@/modules/teams/route'
import files from '@/modules/files/route'

const app = new Hono().basePath('/api')

const routes = app
.route('/teams', teams)
.route('/files', files)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes