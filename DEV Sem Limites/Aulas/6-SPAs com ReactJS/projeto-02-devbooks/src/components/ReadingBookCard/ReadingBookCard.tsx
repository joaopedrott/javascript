import { useState } from "react";

import { MyBook } from "../../models/MyBook";
import { generateThumbnailSrc } from "../../utils/generateThumbnailSrc";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { ButtonsContainer, 
    Details, InputContainer, 
    PageCountText, 
    ProgressBar, 
    ProgressBarContainer, 
    ReadingCard, 
    Thumbnail 
} from "./ReadingBookCard.styles";
import { Input } from "../Input";
import { useUpdateReadingMutation } from "../../hooks/useUpdateReadingMutation";


interface ReadingBookCardProps {
    myBook: MyBook
}

export function ReadingBookCard ({myBook}: ReadingBookCardProps) {
    const [openUpdateReading, setOpenUpdateReading] = useState(false)
    const [page, setPage] = useState('')
    const { mutateAsync, status } = useUpdateReadingMutation()
    const isLoading = status === 'pending';


    const handleOpenUpdateReading = () => {
        setOpenUpdateReading(true)
        setPage('')
    }

    const handleCloseUpdateReading = () => {
        setOpenUpdateReading(false)
    }

    const handleUpdateReading = async () => {//atualiza o status de leitura do livro
        if(!page) {
            return
        }

        await mutateAsync({
            bookId: myBook.bookId,
            page: Number(page)
        })
        setOpenUpdateReading(false)
        
    }

    const currentPage = myBook.currentPage || 0;//pagina atual
    const remaingPages = myBook.totalPages - currentPage; //paginas faltando

    const progress = Math.round((currentPage / myBook.totalPages) * 100);//calculo da barra de progresso

    return(
        <ReadingCard >
          <Thumbnail src={generateThumbnailSrc({bookId: myBook.bookId})} alt={myBook.book.volumeInfo.title} />

          <Details>
                {!openUpdateReading ? (
                    <>
                        <h2>{myBook.book.volumeInfo.title}</h2>
                        {myBook.book.volumeInfo.authors &&(<h3>{myBook.book.volumeInfo.authors[0]}</h3>) }

                        <ProgressBarContainer>
                        <ProgressBar progress={progress}/>
                        <span>{progress}%</span>
                        </ProgressBarContainer>

                        <PageCountText>
                            Faltam {remaingPages} pag. para terminar.
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
                                <Input 
                                label="Pagina atual" 
                                type="number"
                                value={page} 
                                onChange={(e)=> setPage(e.target.value)}
                                />
                            </InputContainer>

                            <ButtonsContainer>
                                <Button size="small" variant="outlined" fullWidh onClick={handleCloseUpdateReading}>Cancelar</Button>
                                <Button 
                                size="small"  
                                fullWidh 
                                onClick={handleUpdateReading}
                                disabled={isLoading}
                                >
                                    {isLoading ? <Spinner size={20}/> : 'Salvar'}</Button>
                            </ButtonsContainer>
                        </>
                )}
            </Details>
        </ReadingCard>
    )
}