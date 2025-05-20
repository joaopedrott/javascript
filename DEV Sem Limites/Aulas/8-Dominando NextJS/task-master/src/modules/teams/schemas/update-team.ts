import { z } from "zod";

export const updateTeamSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }).optional(),
    //URL da imagem
    image: z.union([
        z.instanceof(File),
        z.string().transform((value)=>value=='' ? undefined : value)
    ]).optional(),
})
