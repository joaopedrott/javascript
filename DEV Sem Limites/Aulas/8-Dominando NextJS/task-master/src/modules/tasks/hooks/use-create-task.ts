import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.tasks['$post'], 200>
type Request = InferRequestType<typeof client.api.tasks['$post']>

export function useCreateTask () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ json }) => {
      const response = await client.api.tasks['$post']({
        json
      })

      if (!response.ok) {
        throw new Error('Erro ao criar tarefa')
      }

      return await response.json()
    },
    onSuccess: () => {
      toast.success('Tarefa criada com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: () => {
      toast.error('Erro ao criar tarefa!')
    }
  })
}