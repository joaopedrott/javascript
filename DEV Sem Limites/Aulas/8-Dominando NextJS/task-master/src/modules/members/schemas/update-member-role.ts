import { z } from "zod";
import { MemberRole } from "@prisma/client";



export const updateMemberRole = z.object({
    role: z.nativeEnum(MemberRole)
})