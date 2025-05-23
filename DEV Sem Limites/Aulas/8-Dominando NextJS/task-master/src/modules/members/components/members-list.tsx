"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetMembers } from "../hooks/use-get-members"
import { LoaderCircle } from "lucide-react"
import { Fragment } from "react"
import { Separator } from "@radix-ui/react-separator"
import { MemberAvatar } from "./member-avatar"

interface MembersListProps {
    teamId: string
}
export function MembersList( { teamId }: MembersListProps) {
  const {data: members, isPending} = useGetMembers({teamId})

  return (
    <Card className="w-full h-full rounded-none">
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