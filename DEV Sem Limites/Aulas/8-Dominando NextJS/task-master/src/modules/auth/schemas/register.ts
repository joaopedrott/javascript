import { z } from "zod";

export const registerSchema = z.object({
    name:z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "Senha deve ter pelo menos, 6 caracteres" }),
})