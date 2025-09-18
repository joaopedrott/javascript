import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

interface UseGetProjectParams {
  projectId: string
}

export function useGetProject({ projectId }: UseGetProjectParams) {
  return useQuery({
    queryKey: ["projects", projectId],
    queryFn: async () => {
      const response = await client.api.projects[':projectId'].$get({ param: { projectId }})

      if (!response.ok) {
        throw new Error('Error ao buscar o projeto')
      }

      return await response.json()
    }
  })
}