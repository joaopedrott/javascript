
import { createTaskSchema } from "./create-task";

export const updateTaskSchema = createTaskSchema.partial()