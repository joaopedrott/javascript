import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.teams[':teamId']['$delete'], 200>
type Request = InferRequestType<typeof client.api.teams[':teamId']['$delete']>

export function useDeleteTeam () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ param }) => {
      const response = await client.api.teams[':teamId']['$delete']({
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao deletar time')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Time removido com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      queryClient.invalidateQueries({ queryKey: ['teams', data.id] })
    },
    onError: () => {
      toast.error('Erro ao deletar time!')
    }
  })
}