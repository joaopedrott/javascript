import { useQuery } from "@tanstack/react-query";
import { MyBook } from "../models/MyBook";
import { api } from "../services/api";

interface MyBooks {
    isReading: MyBook[]
    read: MyBook[]
    wantsToRead: MyBook[]

}

function sleep() {
    return new Promise((resolve)=> setTimeout(resolve,2000))
}

export async function fetchMyBooks (): Promise<MyBooks> {
    await sleep()
    const { data } = await api.get<MyBooks>('/my-books')

    return data
}

export function useMyBooksQuery () {
    return useQuery ({
        queryKey: ['my-books'],
        queryFn: fetchMyBooks
    })
}