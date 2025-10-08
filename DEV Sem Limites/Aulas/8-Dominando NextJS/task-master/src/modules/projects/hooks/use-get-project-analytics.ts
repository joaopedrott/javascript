import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { InferResponseType } from "hono";


interface UseGetProjectAnalyticsParams {
  projectId: string
}

export type ProjectAnalyticsResponseType = InferResponseType<typeof client.api.projects[':projectId']['analytics']['$get'], 200>

export function useGetProjectAnalytics({ projectId }: UseGetProjectAnalyticsParams) {
  return useQuery({
    queryKey: ["projects-analytics", projectId],
    queryFn: async () => {
      const response = await client.api.projects[':projectId']['analytics'].$get({ param: { projectId }})

      if (!response.ok) {
        throw new Error('Error ao buscar estatisticas do projeto')
      }

      return await response.json()
    }
  })
}