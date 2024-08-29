import { Book } from "../../models/Book"
import { Container, Details, Thumbnail } from "./SearchResultBook.styles"



interface SearchResultBookProps {
    book: Book
}


export function SearchResultBook ({ book }: SearchResultBookProps) {
    return (
        <Container>
            <Thumbnail src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`} alt={book.volumeInfo.title} />

            <Details>
                <h2>{book.volumeInfo.title}</h2>
                <h3>{book.volumeInfo.authors[0]}</h3>
            </Details>
        </Container>

    )
}