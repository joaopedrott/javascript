import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({theme})=>css`
        max-width: 40rem;
        width: 100%;
        margin-left: auto;
        margin-right: ${theme.spacings.medium};
        position: relative;

        `}


    

`

export const SearchResult = styled.div`
    ${({theme})=>css`
        position: absolute;
        width: 40rem;
        background-color: ${theme.colors.white};
        border-radius: 1rem;
        border: 0.1rem solid ${theme.colors.gray};
        margin-top: ${theme.spacings.xxsmall};
        z-index: 20;
        padding: 1.8rem 1rem;

        span {
            font-weight: ${theme.font.weight.bold};
            margin-left: ${theme.spacings.xxsmall};
        }
    
    `}

`

export const SearchResultBookContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings.xxsmall};
        margin-top: ${theme.spacings.xsmall};
    
    `}

`

export const SeeAllContainer= styled.div`
    ${({theme})=>css`
        display: flex;
        justify-content: center;
        margin-top: ${theme.spacings.xxsmall};
    `}

`