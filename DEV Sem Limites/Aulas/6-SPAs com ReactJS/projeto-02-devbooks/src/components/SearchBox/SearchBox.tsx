import { Container } from './SearchBox.styles'
import {default as SearchIcon} from '../../icons/search.svg?react' 
import { InputHTMLAttributes } from 'react'

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBox(props: SearchBoxProps) {
    return (
        <>  

        <Container>
            <SearchIcon  />
            <input placeholder='Qual livro voce quer buscar?' {...props} />
            
        </Container>
            
        </>
    )
}