import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.members[':memberId']['$patch'], 200>
type Request = InferRequestType<typeof client.api.members[':memberId']['$patch']>

export function useUpdateMemberRole () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ json, param }) => {
      const response = await client.api.members[':memberId']['$patch']({
        json,
        param
      })

      if (!response.ok) {
        throw new Error('Erro ao atualizar cargo do membro')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      toast.success('Membro atualizado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['members'] })
      queryClient.invalidateQueries({ queryKey: ['members', data.id] })
    },
    onError: () => {
      toast.error('Erro ao atualizar cargo do membro!')
    }
  })
}