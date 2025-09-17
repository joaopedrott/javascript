import { client } from '@/lib/rpc'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { InferRequestType, InferResponseType } from 'hono'
import { toast } from 'sonner'

type Response = InferResponseType<typeof client.api.projects['$post'], 200>
type Request = InferRequestType<typeof client.api.projects['$post']>

export function useCreateProject() {
    const queryClient = useQueryClient()

    return useMutation<Response, Error, Request>({
        mutationFn: async({ json })=> {
            const response= await client.api.projects['$post']({
                json,
            })

            if(!response.ok) {
                throw new Error('Erro ao criar projeto')
            }

            return await response.json()
        },
        onSuccess: ()=> {
            toast.success('Projeto criado com sucesso!')
            queryClient.invalidateQueries({
                queryKey: ['projects']
            })
        },
        onError: ()=> {
            toast.error('Erro ao criar projeto!')
        }
    })

}