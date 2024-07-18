import { default as BookIcon } from '../../icons/book.svg?react';

import { Container } from './Logo.styles';

export function Logo () {
    return (
        <Container>
            <BookIcon/>
            <span>DevBooks</span>
        </Container>
    )
}