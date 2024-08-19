import { InputHTMLAttributes } from "react";

import { Container } from "./SearchBox.styles";

import { default as SearchIcon  } from '../../icons/search.svg?react';

type SerchBoxProps = InputHTMLAttributes<HTMLInputElement>

export function SearchBox(props: SerchBoxProps) {
    return (
        <Container>
            <SearchIcon/>
            <input placeholder="Encontre seu livro favorito" {...props}/>
        </Container>
    )
}