import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

import teams from '@/modules/teams/route'

const routes = app.route('/teams', teams)

export const GET = handle(app)

export type AppType = typeof routes