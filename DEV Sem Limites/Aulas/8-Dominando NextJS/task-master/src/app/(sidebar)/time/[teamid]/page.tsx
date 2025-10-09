import { auth } from "@/lib/auth"
import { TeamAnalytics } from "@/modules/teams/components/team-analytics"
import { redirect } from "next/navigation"

export default async function TeamPage() {
    const session = await auth()

    if(!session || !session.user) {
        redirect("/login")
    }

    return (
        <TeamAnalytics />
    )
}