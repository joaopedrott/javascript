import { useMutation, useQueryClient } from "@tanstack/react-query"
import { MyBook } from "../models/MyBook"
import { api } from "../services/api"
import { MyBooks } from "./useMyBooksQuery"

interface UpdateReading {
    bookId: string
    page: number
}

async function updateReading({bookId, page}: UpdateReading) {
    const {data}= await api.put<MyBook>(`/books/${bookId}/reading`, {
        page
    })

    return data
}

export function useUpdateReadingMutation () {
    const queryClient = useQueryClient()
    return useMutation ({
        mutationFn: async (data: UpdateReading)=> await updateReading(data),
        onMutate: async (data) => {
            await queryClient.cancelQueries(['my-books'])

            const previousData = queryClient.getQueryData(['my-books'])

            queryClient.setQueryData<MyBooks>(['my-books'], (oldData)=>{
                if(oldData) {
                    const isReading = oldData.isReading.map((book)=>{
                        if (book.bookId === data.bookId) {
                            return {
                                ...book,
                                currentPage: data.page
                            }
                        }

                        return book
                    })

                    return {
                        ...oldData,
                        isReading
                    }
                }
                return oldData
            })


            return { previousData, data }
        },
        onError: (error, variables, context) => {
            queryClient.setQueryData(['my-books'], context?.previousData)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['my-books'])
        }
    })
}