import { useMutation, useQueryClient } from "@tanstack/react-query"
import { BookState } from "../models/BookState"
import { MyBook } from "../models/MyBook"
import { api } from "../services/api"
import { Book } from "../models/Book"

interface AddToMyBooksMutationArgs {
    bookId: string
    bookState: BookState
}

export async function addToMyBooks ({ bookState, bookId}:AddToMyBooksMutationArgs): Promise<MyBook> {
    const { data } = await api.post<MyBook>('/books/my-books', {
        bookId,
        bookState
    })

    return data
}

export function useAddToMyBooksMutation () {
    const queryCliente = useQueryClient()

    return useMutation({
        mutationFn: async (data: AddToMyBooksMutationArgs) =>  
            await addToMyBooks(data),//faz consulta ao banco de dados adicionando o livro aos "favoritos"

        //41-UI Otimista
        onMutate: async (data)=> {//executa assim que faz a mutationfn para adicionar o livro aos "favoritos"
            const bookDetailKey = ['book-details', data.bookId]
            await queryCliente.cancelQueries({//evita bug
                queryKey: bookDetailKey
            })

            const previousBookDetail = queryCliente.getQueryData(bookDetailKey)//guarda o cache anterior para voltar ao estado anterior se necessario

            queryCliente.setQueryData<Book>(bookDetailKey, (oldData)=> {
                return oldData 
                ? {
                    ...oldData,
                    bookState: data.bookState
                }
                :   oldData
            })

            return {previousBookDetail, data}
        },
        onError: (error, data, context)=>{//se caso um erro acontecer, reverte tudo
            const bookDetailkey= ['book-details', context?.data.bookId]
            queryCliente.setQueryData(bookDetailkey, context?.previousBookDetail)//volta ao estado anterior e nao adiciona a lista

        },
        onSettled: (data)=>{//independente do erro ou sucesso
            const bookDetailKey = ['book-details', data?.bookId]
            queryCliente.invalidateQueries({ queryKey: bookDetailKey })

        }
    })
}