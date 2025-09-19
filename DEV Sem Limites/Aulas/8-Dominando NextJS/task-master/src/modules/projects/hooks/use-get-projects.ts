import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

interface UseGetProjectsParams {
  teamId: string
}

export function useGetProjects({ teamId }: UseGetProjectsParams) {
  return useQuery({
    queryKey: ["projects", teamId],
    queryFn: async () => {
      const response = await client.api.projects.$get({ query: { teamId }})

      if (!response.ok) {
        throw new Error('Error ao buscar os projetos')
      }

      return await response.json()
    }
  })
}