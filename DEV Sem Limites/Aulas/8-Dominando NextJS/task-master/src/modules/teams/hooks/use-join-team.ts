import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type Response = InferResponseType<typeof client.api.teams[':teamId']['join']['$post'], 200>
type Request = InferRequestType<typeof client.api.teams[':teamId']['join']['$post']>

export function useJoinTeam () {
  const queryClient = useQueryClient()

  return useMutation<Response, Error, Request>({
    mutationFn: async ({ param, json }) => {
      const response = await client.api.teams[':teamId']['join']['$post']({
        param,
        json
      })

      if (!response.ok) {
        throw new Error('Erro ao entrar no time')
      }

      return await response.json()
    },
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ['teams'] })
      queryClient.invalidateQueries({ queryKey: ['teams', data.id] })
    },
    onError: () => {
      toast.error('Erro ao entrar no time')
    }
  })
}