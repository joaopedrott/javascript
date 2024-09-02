import { useQuery } from "@tanstack/react-query"
import { Book } from "../models/Book"
import { api } from "../services/api"

interface BookDetailsQueryArgs {
    bookId: string
}


async function fetchBookDetails ({bookId}:BookDetailsQueryArgs ) {
    const { data } = await api.get<Book>(`/books/${bookId}`)

    return data
}

export function useBookDetailsQuery ({bookId}:BookDetailsQueryArgs) {
    return useQuery({
        queryKey: ['book-details', bookId],
        queryFn: async ()=> await fetchBookDetails({bookId}),
        staleTime: Infinity
    })
}