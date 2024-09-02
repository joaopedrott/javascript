type BookState = 'IS_READING' | 'READ' | 'WANTS_TO_READ'

export interface Book {
    id: string
    volumeInfo: {
        title: string
        description: string
        imageLinks?: {
            thumbnail: string
        }
        authors: string[],
        averageRating?: number,
        publisher: string
        publishedDate: string
        pageCount: number
    },
    bookState: BookState
}