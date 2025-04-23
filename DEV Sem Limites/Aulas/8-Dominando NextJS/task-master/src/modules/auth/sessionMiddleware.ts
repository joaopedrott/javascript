import 'server-only';

import { createMiddleware } from 'hono/factory';
import { auth } from '@/lib/auth';

interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
}

interface SessionContext {
    Variables: {
        user: User
    }
}

export const sessionMiddleware = createMiddleware<SessionContext>( 
    async (c, next) => {
    const session = await auth()

    if (!session || !session.user) {
        return c.json({ error: 'Unauthorized' }, 401)
    }

    const { user } = session
    c.set('user', user)

    await next()
})