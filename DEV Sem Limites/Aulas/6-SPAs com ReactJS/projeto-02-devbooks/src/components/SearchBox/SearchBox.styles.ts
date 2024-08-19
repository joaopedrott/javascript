import styled, { css } from "styled-components";

export const Container= styled.div`
    ${({theme})=>css`
        display: flex;
        align-items: center;
        border: 0.1rem solid ${theme.colors.gray};
        border-radius: 1rem;
        padding: 0 1rem;
        flex: 1;

        svg {
            height: 2rem;
            width: 2rem;

        }

        input {
            width: 100%;
            height: 3.6rem;
            border: 0;
            margin-left: 1.2rem;
            outline: none;
        }
`}
`

