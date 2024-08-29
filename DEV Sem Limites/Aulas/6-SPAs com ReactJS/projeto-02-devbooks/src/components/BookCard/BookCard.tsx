import { Book } from "../../models/Book";
import { Container, Details, Thumbnail } from "./BookCard.styles";
import { default as StarIcon }from '../../icons/star.svg?react'
interface BookCardProps {
    book: Book
}

export function BookCard ({book}: BookCardProps)  {
    return (
        <Container to={`/livros/${book.id}`}>
            <Thumbnail src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w400-h600&source=gbs_api`} alt={book.volumeInfo.title}/>

            <Details>
                <h2>{book.volumeInfo.title}</h2>
                
                {book.volumeInfo.authors?.[0] && <h3>{book.volumeInfo.authors[0]}</h3>}

                <h3>
                    {book.volumeInfo.averageRating? book.volumeInfo.averageRating: 4}
                    <StarIcon/>
                </h3>
            </Details>
        </Container>
    )
}