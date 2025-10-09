import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";

interface UseGetTeamAnalyticsParams {
  teamId: string
}

export type TeamAnalyticsResponseType = InferResponseType<typeof client.api.teams[':teamId']['analytics']['$get'], 200>

export function useGetTeamAnalytics({ teamId }: UseGetTeamAnalyticsParams) {
  return useQuery({
    queryKey: ["team-analytics", teamId],
    queryFn: async () => {
      const response = await client.api.teams[':teamId']['analytics'].$get({ param: { teamId }})

      if (!response.ok) {
        throw new Error('Error ao buscar o estatisticas do time')
      }

      return await response.json()
    }
  })
}