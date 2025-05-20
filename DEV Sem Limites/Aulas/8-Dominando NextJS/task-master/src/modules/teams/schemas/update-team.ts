import { z } from "zod";

export const updateTeamSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  image: z.union([z.string(), z.instanceof(File)]).nullable().optional()
})