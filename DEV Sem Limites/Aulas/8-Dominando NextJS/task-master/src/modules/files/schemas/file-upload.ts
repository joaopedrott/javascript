import { z } from "zod";

export const fileUploadSchema = z.object({
    contentType: z.string(),
})