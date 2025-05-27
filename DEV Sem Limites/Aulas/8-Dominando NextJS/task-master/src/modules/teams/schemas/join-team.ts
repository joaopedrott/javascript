import { z } from "zod";

export const joinTeamSchema = z.object({
  inviteCode: z.string()
})