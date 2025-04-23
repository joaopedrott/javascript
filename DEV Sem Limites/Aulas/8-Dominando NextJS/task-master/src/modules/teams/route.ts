import { Hono } from 'hono'
import { sessionMiddleware } from '../auth/sessionMiddleware'

const app = new Hono().get('/',sessionMiddleware, (c) => {
  return c.json({
    message: 'Hello from teams route!',
  })
})


export default app