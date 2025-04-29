import { client } from '@/lib/rpc'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { InferRequestType, InferResponseType } from 'hono'
import { toast } from 'sonner'

type Response = InferResponseType<typeof client.api.teams['$post']>
type Request = InferRequestType<typeof client.api.teams['$post']>

export function useCreateTeam() {
    const queryClient = useQueryClient()

    return useMutation<Response, Error, Request>({
        mutationFn: async({ json })=> {
            const response= await client.api.teams['$post']({
                json,
            })

            return await response.json()
        },
        onSuccess: ()=> {
            toast.success('Time criado com sucesso!'),
            queryClient.invalidateQueries({
                queryKey: ['teams']
            })
        },
        onError: ()=> {
            toast.error('Erro ao criar time!')
        }
    })

}