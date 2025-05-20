import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.teams[':teamId']['$patch'], 200>
type Request = InferRequestType<typeof client.api.teams[':teamId']['$patch']>

export function useUpdateTeam () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ json, param }) => {
      const response = await client.api.teams[':teamId']['$patch']({
        json,
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao atualizar time')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Time atualizado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      queryClient.invalidateQueries({ queryKey: ['teams', data.id] })
    },
    onError: () => {
      toast.error('Erro ao atualizar time!')
    }
  })
}