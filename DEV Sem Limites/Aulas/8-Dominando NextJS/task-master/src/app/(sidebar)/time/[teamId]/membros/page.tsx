import { auth } from "@/lib/auth";
import { InviteMember } from "@/modules/members/components/invite-member";
import { MembersList } from "@/modules/members/components/members-list";
import { getTeam } from "@/modules/teams/queries";
import { redirect } from "next/navigation";

interface MembersPageProps {
    params: {
        teamId: string
    }
}


export default async function MembersPage ({ params }: MembersPageProps) {
  const { teamId } = params

  const session = await auth()
  
  if (!session || !session.user) {
    redirect('/login')
  }

  const team = await getTeam(teamId)

  if (!team) {
    return <p>Time nao encontrado</p>
  }
    
    return (
        <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
            <MembersList teamId={teamId} />

            <InviteMember teamId={teamId} inviteCode={team.inviteCode} />
        </div>
    )
}