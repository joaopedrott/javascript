//hook para buscar dados na api utilizando o react query para fazer cache para nao fazer pesquisa de algo que ja foi feito
import { useQuery } from "@tanstack/react-query"
import { Book } from "../components/SearchResultBook/SearchResultBook"
import { api } from "../services/api"

interface BooksQueryResponse {
    totalItems: number
    items: Book[]
}

interface BooksQueryArgs {
    search: string
    maxResults: number
}

async function fetchBooks ({search, maxResults}:BooksQueryArgs): Promise<BooksQueryResponse>{
    const { data } = await api.get<BooksQueryResponse>(`/books?q=${search}&maxResults=${maxResults}`)

    return data
    
}

export function useBooksQuery ({ search, maxResults}: BooksQueryArgs) {
    return useQuery ({
        queryKey: ['books', search, maxResults],
        queryFn: async()=> await fetchBooks({search, maxResults}),
        staleTime: Infinity
    })
}