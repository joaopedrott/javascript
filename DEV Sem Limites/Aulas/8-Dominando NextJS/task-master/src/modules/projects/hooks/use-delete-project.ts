import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.projects[':projectId']['$delete'], 200>
type Request = InferRequestType<typeof client.api.projects[':projectId']['$delete']>

export function useDeleteProject() {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ param }) => {
      const response = await client.api.projects[':projectId']['$delete']({
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao deletar projeto')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Projeto removido com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['projects', data.id] })
      
    },
    onError: () => {
      toast.error('Erro ao deletar projeto!')
    }
  })
}