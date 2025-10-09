import { useTeamId } from "@/modules/teams/hooks/use-team-id";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Member } from "../types";
import { MemberAvatar } from "./member-avatar";

interface MemberListProps {
  members: Member[]
  total: number
}

export function MemberList ({ members, total }: MemberListProps) {
  const teamId = useTeamId()

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">
            Membros ({ total })
          </p>

          <Button variant='secondary' size='icon' asChild>
            <Link href={`/time/${teamId}/membros`}>
              <Settings className="size-4 text-neutral-400" />
            </Link>
          </Button>
        </div>

        <Separator className="my-4" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map(member => (
            <li key={member.id}>
              <Card className="border rounded-none shadow-none overflow-hidden">
                <CardContent className="flex items-center gap-x-2">
                  <MemberAvatar 
                    className="size-12"
                    name={member.user.name}
                    image={member.user.image ?? undefined}
                  />
                  <div className="flex flex-col items-center overflow-hidden">
                    <p className="text-lg font-medium line-clamp-1">
                      {member.user.name}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {member.user.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
          <li className="text-sm text-muted-foreground text-center hidden first-of-type:block">Nenhum membro encontrado</li>
        </ul>
      </div>
    </div>
  )
}