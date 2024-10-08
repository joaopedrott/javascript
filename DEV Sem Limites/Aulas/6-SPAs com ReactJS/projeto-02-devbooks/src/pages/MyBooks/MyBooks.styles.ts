import styled, { css } from "styled-components";
import { clampText } from "../../styles/clampText";


export const Container = styled.div`

`

export const BookContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        gap: ${theme.spacings.small};
        margin-top: 1.6rem;
        margin-bottom: 6.4rem;
        flex-wrap: wrap;
    `}
`

export const ReadingList = styled.ul`

    ${({theme})=>css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
        gap: ${theme.spacings.small};
        margin-top: ${theme.spacings.xsmall};
        margin-bottom: 6.4rem;
        list-style: none;
    `}
`
export const ReadingCard = styled.div`
    ${({theme})=>css`
        display: flex;
        border: 0.1rem solid ${theme.colors.gray};
        border-radius: ${theme.border.radius.default};
        padding: ${theme.spacings.xsmall};
        width: 100%;
        background-color: ${theme.colors.white};

        h2 {
            font-size: ${theme.font.sizes.large};
            ${clampText(2)}
        }

        h3 {
            font-size: ${theme.font.sizes.small};
            margin-top: 0.4rem;
            font-weight: normal;
        }
    `}
`




export const Book = styled.div`
${({theme})=>css`

width: 12rem;

    h2 {
        font-size:  ${theme.font.sizes.medium};
        margin-top: ${theme.spacings.xxsmall};
        margin-bottom: 0.4rem;

        ${clampText(2)}
    }

    h3 {
        font-size: ${theme.font.sizes.xsmall};
        font-weight: normal;

    }
`}
`

export const Thumbnail = styled.img`
    ${({theme})=>css`
        height: 16rem;
        width: 12rem;
        object-fit: fill;
        border: ${theme.border.radius.small};
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    
    `}

`
