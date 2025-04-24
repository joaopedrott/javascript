import { z } from "zod";

export const createTeamSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    //URL da imagem
    image: z.union([
        z.instanceof(File),
        z.string().transform((value)=>value=='' ? undefined : value)
    ]).optional(),
})