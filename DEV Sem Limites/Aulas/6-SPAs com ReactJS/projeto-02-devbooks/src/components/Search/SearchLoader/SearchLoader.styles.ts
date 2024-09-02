import styled, { css } from "styled-components";

export const Container = styled.div`
 ${({theme})=>css`
    display: flex;
    padding: ${theme.spacings.xxsmall};

 `}
`

export const TextContainer = styled.div`
 ${({theme})=>css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.small};
    gap: ${theme.spacings.xxsmall};
 `}

`