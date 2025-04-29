import { client } from '@/lib/rpc'
import { useMutation } from '@tanstack/react-query'
import { InferRequestType, InferResponseType } from 'hono'
import { toast } from 'sonner'

type Response = InferResponseType<typeof client.api.files.upload['$post'], 200>
type Request = InferRequestType<typeof client.api.files.upload['$post']>

export function usePresignedFile() {
    return useMutation<Response, Error, Request>({
        mutationFn: async({ json })=> {
            const response = await client.api.files.upload['$post']({
                json
            })

            if(!response.ok) {
                throw new Error('Error on presigned file')
            }

            return await response.json()
        },
        
        onError: () => {
            toast.error('Erro ao fazer upload de arquivo')
        }
    })

}