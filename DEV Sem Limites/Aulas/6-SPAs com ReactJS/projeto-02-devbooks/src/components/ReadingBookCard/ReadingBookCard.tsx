import { useState } from "react";
import { MyBook } from "../../models/MyBook";
import { generateThumbnailSrc } from "../../utils/generateThumbnailSrc";
import { Button } from "../Button";
import { ButtonsContainer, Details, InputContainer, PageCountText, ProgressBar, ProgressBarContainer, ReadingCard, Thumbnail } from "./ReadingBookCard.styles";
import { Input } from "../Input";



interface ReadingBookCardProps {
    myBook: MyBook
}

export function ReadingBookCard ({myBook}: ReadingBookCardProps) {
    const [openUpdateReading, setOpenUpdateReading] = useState(false)

    const handleOpenUpdateReading = () => {
        setOpenUpdateReading(true)
    }

    const handleCloseUpdateReading = () => {
        setOpenUpdateReading(false)
    }

    return(
        <ReadingCard >
          <Thumbnail src={generateThumbnailSrc({bookId: myBook.bookId})} alt={myBook.book.volumeInfo.title} />

          <Details>
                {!openUpdateReading ? (
                    <>
                        <h2>{myBook.book.volumeInfo.title}</h2>
                        {myBook.book.volumeInfo.authors &&(<h3>{myBook.book.volumeInfo.authors[0]}</h3>) }

                        <ProgressBarContainer>
                        <ProgressBar progress={30}/>
                        <span>30%</span>
                        </ProgressBarContainer>

                        <PageCountText>
                            Faltam 200 pag. para terminar.
                        </PageCountText>
                                                        
                        <Button variant="outlined"  size="small"
                        fullWidh onClick={handleOpenUpdateReading}>
                            Atualizar Leitura 
                        </Button>
                    </>
                    ): (
                        <>
                            <h2>Atualizar leitura</h2>

                            <InputContainer>
                                <Input label="Pagina atual"/>
                            </InputContainer>

                            <ButtonsContainer>
                                <Button size="small" variant="outlined" fullWidh onClick={handleCloseUpdateReading}>Cancelar</Button>
                                <Button size="small"  fullWidh>Salvar</Button>
                            </ButtonsContainer>
                        </>
                )}
            </Details>
        </ReadingCard>
    )
}