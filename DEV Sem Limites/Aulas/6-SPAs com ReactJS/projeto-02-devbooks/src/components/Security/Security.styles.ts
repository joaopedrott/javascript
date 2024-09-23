import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({theme})=>css`
        h2 {
            margin-bottom: ${theme.spacings.small};
        }
    `}
`

export const UpdatePasswordContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings.xsmall};
        width: 538px;
    `}

`