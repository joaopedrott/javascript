import { z } from 'zod'

export const updateTeamSchema = z.object({
  name: z.string().optional(),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === '' ? undefined : value)
  ]).optional(),
})
