import { Book } from "./Book"
import { BookState } from "./BookState"

export interface MyBook {
    id: number
    userId: number
    bookId: string
    bookState: BookState
    currentPage: number
    totalPages: number
    book: Book
    createdAt: Date
    updateAt: Date
}