import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.tasks.move['$post'], 200>
type Request = InferRequestType<typeof client.api.tasks.move['$post']>

export function useMoveTask () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ json }) => {
      const response = await client.api.tasks.move['$post']({
        json
      })

      if (!response.ok) {
        throw new Error('Erro ao mover tarefas')
      }

      return await response.json()
    },
    onSuccess: () => {
      toast.success('Tarefas movidas com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: () => {
      toast.error('Erro ao mover tarefas!')
    }
  })
}