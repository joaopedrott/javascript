import { prisma } from "@/lib/prisma"

export async function getTeams(userId: string) {
  const members = await prisma.member.findMany({
    where: {
        userId
    }
  })

  if(members.length===0) {
    return []
  }

  const teams = await prisma.team.findMany({
    where: {
        id: {
            in: members.map((member) => member.teamId)
        }
    }
  })

  return teams
}

export async function getTeam(teamId: string) {
  const team = await prisma.team.findUnique({
    where: {
        id: teamId
    }
  })
  return team
}