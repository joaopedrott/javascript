import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.members[':memberId']['$delete'], 200>
type Request = InferRequestType<typeof client.api.members[':memberId']['$delete']>

export function useDeleteMember () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ param }) => {
      const response = await client.api.members[':memberId']['$delete']({
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao deletar membro')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Membro removido com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['members'] })
      queryClient.invalidateQueries({ queryKey: ['members', data.id] })
    },
    onError: () => {
      toast.error('Erro ao deletar membro!')
    }
  })
}