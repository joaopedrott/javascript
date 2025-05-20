import { prisma } from "@/lib/prisma";
import { UpdateTeamForm } from "@/modules/teams/components/update-team-form";

interface UpdateTeamPageProps {
  params: {
    teamId: string
  }
}

export default async function UpdateTeamPage ({ params }: UpdateTeamPageProps) {
  const resolvedParams = await params;
  const { teamId } = resolvedParams;
  
  const team = await prisma.team.findUnique({
    where: {
      id: teamId
    }
  })

  if (!team) {
    return <div>Time não encontrado</div>
  }

  return (
    <div className="flex gap-4 w-full lg:max-w-xl lg:mx-auto">
      <UpdateTeamForm initialData={team} />
    </div>
  )
}