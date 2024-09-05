import { MouseEventHandler, ReactNode } from "react"

import { Container } from "./MyBookButton.styles"

import { default as CheckIcon } from '../../../icons/check.svg?react'

interface MyBookButtonProps {
    children: ReactNode
    isSelected: boolean
    onAddBookList: MouseEventHandler<HTMLButtonElement>
    disabled: boolean
}

export function MyBookButton ({ children, isSelected, onAddBookList, disabled } : MyBookButtonProps) {
    return (
        <Container 
            variant={isSelected ? 'default' : 'outlined'}
            isSelected={isSelected} 
            disabled={disabled}
            onClick={onAddBookList}
        >
                {isSelected && <CheckIcon/>}
                {children}
        </Container>
    )
}