

import { useEffect, useState } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { googleBooksApi } from '../../services/googleBooksApi'
import { Thumbnail } from '../../components/Thumbnail/Thumbnail'

import { Container, Title, Subtitle } from './Books.styles'

//4-modela as informacoes do livro para minha aplicacao ou faz um modelo para facil acesso as informacoes vindas da api livros
interface Book {
    id: string
    volumeInfo: {
        title:string
        subtitle: string
        description: string
        imageLinks?: {
            thumbnail: string
        }
    }
}
interface BooksState {
    totalItems: number
    items: Book[]
}
//---------------------------------------------------------------------------------------------------------------------------


export function Books () {
    //2-crio hook que armazena os livros achados na pesquisa/ 5- uso a tipagem para fazer a interface criada se conectar ao dados do livro que eu quero
    const [books, setBooks] = useState<BooksState | null>(null)

    const location = useLocation()

   //0-pego oq foi escrito no parametro q na barra de endereco
    // Uso hook (useSearchParams) para pegar o parametro ou livro digitado na barra de pesquisa que foi enviado na barra de endereco (pagina Search)
    const params = useSearchParams()
    const [searchParams] = params
    const q = searchParams.get('q')
    //coloco oq tem no parametro q e coloco na variavel 'q'

    //1- faz a requisicao dos livros na hora que a pagina abre, usando o useEffect
    useEffect(()=>{
        googleBooksApi.get(`/v1/volumes?q=${q}&maxResults=20`)
        //3-coloca a lista de livros da chamada no meu hook useState que antes era vazio (null)
        .then((response)=> setBooks(response.data))

    }, [q])

    if(!q){ //Extra-trato um possivel erro que pode ocorrer se caso o q for pesquisado vazio
    // impede de buscar livro sem nome, pela barra de pesquisa
        return <Navigate to="/" state={{ from: location }} replace />
    }


    return (
        //pagina que mostra a lista de livros da busca
        <Container>
            <h1>Resultado da sua busca</h1>
    {/* 6- Imprimo na pagina do site, uma lista de livros usando o map no estado que tem a lista de livros */}
            {books && (
                <ul>
                    {books.items.map(book=> (
                        <li key={book.id}>
                            <Thumbnail 
                            thumbnail={book.volumeInfo.imageLinks?.thumbnail} 
                            title={book.volumeInfo.title}
                            bgColor='#d9d9d9'
                            />
                            <Title>{book.volumeInfo.title}</Title>
                            <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    )
}