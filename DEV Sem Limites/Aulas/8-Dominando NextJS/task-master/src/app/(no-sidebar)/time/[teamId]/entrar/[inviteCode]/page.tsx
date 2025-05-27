import { auth } from "@/lib/auth"
import { JoinTeamForm } from "@/modules/teams/components/join-team-form"
import { getTeam } from "@/modules/teams/queries"
import { redirect } from "next/navigation"

interface JoinTeamPageProps {
    params: {
        teamId: string
    }
}

export default async function JoinTeamPage  ({ params }: JoinTeamPageProps) {
    const session = await auth()

    if(!session || !session.user) {
        redirect('/login')
    }

    const { teamId } = params

    const team = await getTeam(teamId)

    if(!team) {
        return <p>Time nao encontrado</p>
    }

    return (
        <div className="w-full max-w-xl">
            <JoinTeamForm name={team.name} />
        </div>
    )
}