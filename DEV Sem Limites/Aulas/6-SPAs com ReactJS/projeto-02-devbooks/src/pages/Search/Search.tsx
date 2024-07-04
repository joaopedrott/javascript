import { Container, SearchContainer, SearchButton } from './Search.styles'

import { SearchBox } from '../../components/SearchBox'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Search() {
    const [search, setSearch] =useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (search) {
            //navegar para a pagina de resultados
            //e depois
            //adiciona o que foi digitado na barra de pesquisa, a barra de enderecos
            navigate(`/books?q=${search}`)
        }
    }

    return (
        <Container>
            <h1>Busque seus livros favoritos!</h1>
            <SearchContainer>
                <SearchBox value={search} onChange={(e)=> setSearch(e.target.value)} />
                <SearchButton onClick={handleSearch}>Buscar</SearchButton>
            </SearchContainer>
            
        </Container>
    )
}