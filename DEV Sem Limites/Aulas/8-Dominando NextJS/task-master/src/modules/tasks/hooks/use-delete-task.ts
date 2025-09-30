import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.tasks[':taskId']['$delete'], 200>
type Request = InferRequestType<typeof client.api.tasks[':taskId']['$delete']>

export function useDeleteTask() {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ param }) => {
      const response = await client.api.tasks[':taskId']['$delete']({
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Tarefa removida com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['task', data.id] })
      
    },
    onError: () => {
      toast.error('Erro ao deletar tarefa!')
    }
  })
}