import { client } from "@/lib/rpc";
import { TaskStatus } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

interface UseGetTasksParams {
  teamId: string,
  projectId?: string,
  assigneeId?: string,
  status?: TaskStatus,
  dueDate?: string,
  search?: string,
}

export function useGetTasks(query: UseGetTasksParams) {
  return useQuery({
    queryKey: [
        "tasks", 
        query.teamId, 
        query.projectId, 
        query.assigneeId, 
        query.status, 
        query.dueDate,
        query.search
    ],
    queryFn: async () => {
      const response = await client.api.tasks.$get({ query })

      if (!response.ok) {
        throw new Error('Error ao buscar os tarefas')
      }

      return await response.json()
    }
  })
}