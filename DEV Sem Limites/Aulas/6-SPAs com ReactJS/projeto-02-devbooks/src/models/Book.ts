export interface Book {
    id: string
    volumeInfo: {
        title: string
        description: string
        imageLinks?: {
            thumbnail: string
        }
        authors: string[],
        averageRating?: number
    }
}