import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        padding: ${theme.spacings.xsmall};
        border-radius: ${theme.border.radius.default};
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.white};
        border: 0.1rem solid ${theme.colors.gray};
    
    `}
`

export const ThumbnailContainer = styled.div`

        margin: 0 auto;
    
    
`

export const DetailsContainer = styled.div`
    ${({theme})=>css`
        margin-top: ${theme.spacings.xxsmall};
        display: flex;
        flex-direction: column;
        gap: 1rem;
    
    `}
`