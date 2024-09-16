import { useMutation } from "@tanstack/react-query"
import { MyBook } from "../models/MyBook"
import { api } from "../services/api"

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
    return useMutation ({
        mutationFn: async(data: UpdateReading)=> await updateReading(data),
    })
}