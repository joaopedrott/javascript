//hook para buscar dados na api utilizando o react query para fazer cache para nao fazer pesquisa de algo que ja foi feito
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { api } from "../services/api"
import { Book } from "../models/Book"

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

export function useLazyBooksQuery () {//cache da preview de busca de livros
    const [vairiables, setVariables] = useState<BooksQueryArgs | null>(null)

    const query = useQuery ({
        queryKey: ['lazy-books', vairiables],
        queryFn: async()=> await fetchBooks(vairiables as BooksQueryArgs),
        staleTime: Infinity,
        enabled: Boolean(vairiables)
    })

    const fetch = (queryVariables: BooksQueryArgs) => {
        setVariables(queryVariables)
    }

    return {
        fetch,
        ...query
    }
}