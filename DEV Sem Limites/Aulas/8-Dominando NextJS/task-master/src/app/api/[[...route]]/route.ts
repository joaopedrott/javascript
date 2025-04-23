import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import teams from '@/modules/teams/route'

const app = new Hono().basePath('/api')

const routes = app.route('/teams', teams)

export const GET = handle(app)

export type AppType = typeof routes