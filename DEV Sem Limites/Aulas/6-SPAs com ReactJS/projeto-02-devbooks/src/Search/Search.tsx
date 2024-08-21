import { KeyboardEvent, useState } from "react";
import { Link } from "../components/Link";
import { SearchBox } from "../components/SearchBox";
import { Container, SearchResult, SearchResultBookContainer, SeeAllContainer } from "./Search.styles";
import { api } from "../services/api";
import { Book, SearchResultBook } from "../components/SearchResultBook/SearchResultBook";


interface ResultState {
    items: Book[]
}


export function Search () {
    const [search, setSearch]= useState('')//nome do livro digitado(pesquisado)
    const [result, setResult]= useState<ResultState | null>(null)//livros achados
    const [loading, setLoading] = useState(false)//para aparecer o nome loading
    const [showResult, setshowResult] = useState(false)//faz somente aparecer a janela de livros quando for feita a pesquisa

    const handleSearch = async ()=> {
        if(search){
            setLoading(true)
            setshowResult(true)

            const maxResults= 3
            const {data}=await api.get(`/books?q=${search}&maxResults=${maxResults}`)

            setResult(data)
            setLoading(false)
        }
    }


    //monitora as teclas que estamos apertando, a funcao so eh chamada quando for apertado a tecla Enter
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>)=> {
        if(e.key === 'Enter'){
            handleSearch()
        }
    }



    return (
        <Container>
            <SearchBox value={search} onChange={(e)=> setSearch(e.target.value)} onKeyDown={handleKeyPress}/>

        {showResult &&  (
                        <SearchResult>
                        <span>Resultado da Busca</span> {/* titulo */}
        
                        {/* lista de livros */}
                        <SearchResultBookContainer>
                            {result && !loading? (result.items.map(item => <SearchResultBook key={item.id} book={item} />)): (<span>Carregando...</span>)}

                        </SearchResultBookContainer>
        
                    {/* link de ver mais livros */}
                        <SeeAllContainer>
                            <Link to="/livros">Ver Todos</Link>
                        </SeeAllContainer>
                    </SearchResult>
        )}
        </Container>
    )
}