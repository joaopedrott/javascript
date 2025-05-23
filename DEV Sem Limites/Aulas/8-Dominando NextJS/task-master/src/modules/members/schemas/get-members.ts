import { z } from 'zod';

export const getMembersSchema = z.object({
    teamId: z.string(),

})