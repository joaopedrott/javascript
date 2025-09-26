import { TaskStatus } from "@prisma/client";
import { z } from "zod";

export const getTasksSchema = z.object({
  teamId: z.string(),
  projectId: z.string().optional(),
  assigneeId: z.string().optional(),
  status: z.nativeEnum(TaskStatus).optional(),
  search: z.string().optional(),
  dueDate: z.string().optional(),
})