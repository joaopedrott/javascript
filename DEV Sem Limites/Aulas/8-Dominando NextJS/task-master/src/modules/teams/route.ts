import { Hono } from 'hono'

const app = new Hono().get('/', (c) => {
  return c.json({
    message: 'Hello from teams route!',
  })
})


export default app