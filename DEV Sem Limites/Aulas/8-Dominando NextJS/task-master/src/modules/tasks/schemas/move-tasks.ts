import { TaskStatus } from "@prisma/client";
import { z } from "zod";

export const moveTasksSchema = z.object({
    tasks: z.array(
        z.object({
            id: z.string(),
            status: z.nativeEnum(TaskStatus),
            position: z.number().int().positive().min(1000).max(1000000),
        })
    )
})