import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.tasks[':taskId']['$patch'], 200>
type Request = InferRequestType<typeof client.api.tasks[':taskId']['$patch']>

export function useUpdateTask () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ json, param }) => {
      const response = await client.api.tasks[':taskId']['$patch']({
        json,
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao atualizar tarefa')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Tarefa atualizado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      queryClient.invalidateQueries({ queryKey: ['task', data.id] })
    },
    onError: () => {
      toast.error('Erro ao atualizar tarefa!')
    }
  })
}