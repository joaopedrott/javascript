import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.teams[':teamId']['reset-invite-code']['$post'], 200>
type Request = InferRequestType<typeof client.api.teams[':teamId']['reset-invite-code']['$post']>

export function useResetInviteCode () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ param }) => {
      const response = await client.api.teams[':teamId']['reset-invite-code']['$post']({
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao atualizar codigo de convite')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Codigo de convite atualizado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      queryClient.invalidateQueries({ queryKey: ['teams', data.id] })
    },
    onError: () => {
      toast.error('Erro ao atualizar codigo de convite')
    }
  })
}