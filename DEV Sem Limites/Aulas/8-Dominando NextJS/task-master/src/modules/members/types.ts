import { MemberRole } from "@prisma/client"
import { User } from "../tasks/types"

export interface Member {
  id: string
  role: MemberRole
  teamId: string
  user: User
}