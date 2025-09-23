import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.projects[':projectId']['$patch'], 200>
type Request = InferRequestType<typeof client.api.projects[':projectId']['$patch']>

export function useUpdateProject () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ json, param }) => {
      const response = await client.api.projects[':projectId']['$patch']({
        json,
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao atualizar projeto')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Projeto atualizado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['projects', data.id] })
      queryClient.invalidateQueries({ queryKey: ['projects', data.teamId] })
    },
    onError: () => {
      toast.error('Erro ao atualizar projeto!')
    }
  })
}