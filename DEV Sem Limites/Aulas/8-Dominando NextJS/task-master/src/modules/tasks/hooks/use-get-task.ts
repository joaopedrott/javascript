import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

interface UseGetTaskParams {
  taskId: string
}

export function useGetTask(query: UseGetTaskParams) {
  console.log({ query })
  return useQuery({
    queryKey: [
      "tasks", 
      query.taskId
    ],
    queryFn: async () => {
      const response = await client.api.tasks[':taskId'].$get({ 
        param: { 
          taskId: query.taskId 
        }
      })

      if (!response.ok) {
        throw new Error('Error ao buscar a tarefa')
      }

      return await response.json()
    }
  })
}