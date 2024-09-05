import styled, { css } from "styled-components";

import { Button } from "../../../components/Button";

interface ContainerProps {
    isSelected: boolean
}

export const Container = styled(Button)<ContainerProps>`
    ${({isSelected})=>css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${isSelected ? '#58c45a' : 'inherit'};
        gap: 1.6rem;
        
        svg {
            width: 1.6rem;
            height: 1.6rem;

        }
    `}
`


