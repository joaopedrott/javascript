"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetMembers } from "../hooks/use-get-members"
import { LoaderCircle, MoreVertical } from "lucide-react"
import { Fragment } from "react"
import { Separator } from "@radix-ui/react-separator"
import { MemberAvatar } from "./member-avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useConfirm } from "@/hooks/use-confirm"
import { useDeleteMember } from "../hooks/use-delete-member"
import { useUpdateMemberRole } from "../hooks/use-update-member-role"
import { MemberRole } from "@prisma/client"


interface MembersListProps {
    teamId: string
}
export function MembersList( { teamId }: MembersListProps) {
  const {data: members, isPending} = useGetMembers({teamId})
  const { mutate: deleteMember, isPending: isDeletingMember } = useDeleteMember()
  const { mutate: updateMemberRole, isPending: isUpdatingMemberRole } = useUpdateMemberRole()
  const [RemoveMemberDialog, confirmRemove] = useConfirm(
    'Remover Membro',
    'Voce tem certeza que deseja remover este membro?',
  )
  const handleUpdateMemberRole = async (memberId: string, role: MemberRole) => {
    updateMemberRole({
      param: {
        memberId
      },
      json: {
        role
      }
    })
  }
  const handleRemoveMember = async (memberId: string) => {
    const ok = await confirmRemove()

    if(!ok) {
      return
    }

    deleteMember({
      param: {
         memberId
        }
      }, {
        onSuccess: () => {
          window.location.reload()
        }
      }
    )
  }

  return (
    <Card className="w-full h-full rounded-none">
      <RemoveMemberDialog/>

      <CardHeader className="flex flex-row items-center gap-x-4 px-7 space-y-0">
        <CardTitle>
          Lista de Membros
        </CardTitle>
      </CardHeader>

      <CardContent className="px-7">
        {isPending && (
          <div className="flex items-center justify-center">
            <LoaderCircle className="size-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {members?.data.map((member, index) => (
          <Fragment key={member.id}>
            <div className="flex items-center gap-2">
              <MemberAvatar 
              className="size-10"
              fallbackClassName="text-xl"
              image={member.user.image ?? undefined}
              name={member.user.name as string}
              />

              <div className="flex flex-col">
                <p className="text-sm font-medium">{member.user.name}</p>
                <p className="text-xs text-muted-foreground">{member.user.email}</p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" variant='secondary' size='icon'>
                    <MoreVertical className="size-4 text-muted-foreground"/>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="rounded-none" side="bottom" align="end">
                  <DropdownMenuItem 
                  onClick={() => handleUpdateMemberRole(member.id, MemberRole.ADMIN)} 
                  className="font-medium hover:rounded-none"
                  disabled={isUpdatingMemberRole}
                  >
                    Tornar Administrador
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                  onClick={() => handleUpdateMemberRole(member.id, MemberRole.MEMBER)} 
                  className="font-medium hover:rounded-none"
                  disabled={isUpdatingMemberRole}
                  >
                    Tornar Membro
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                  onClick={() => handleRemoveMember(member.id)} 
                  className="font-medium text-red-500 hover:rounded-none"
                  disabled={isDeletingMember}
                  >
                    Remover {member.user.name}
                  </DropdownMenuItem>                                    
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {index !== members.data.length - 1 && (
              <Separator className="my-2" />
            )}
          </Fragment>
        ))}
      </CardContent>
    </Card>
  )
}