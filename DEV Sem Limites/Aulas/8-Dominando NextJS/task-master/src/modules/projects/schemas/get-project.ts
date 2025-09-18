import { z } from "zod";

export const getProjectsSchema = z.object({
    teamId: z.string()
})