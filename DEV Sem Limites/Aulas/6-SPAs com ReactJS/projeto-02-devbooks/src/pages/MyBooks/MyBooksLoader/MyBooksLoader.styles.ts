import styled, { css } from "styled-components";

export const BookProgressContainer= styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: ${theme.spacings.xxsmall};
        margin-left: ${theme.spacings.xsmall};
    `}
`

export const ProgressBarContainer= styled.div`
    ${({theme})=> css`
        display: flex;
        gap: ${theme.spacings.xxsmall};
        margin: ${theme.spacings.xsmall} 0;
    `}
`
export const SmallBookContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        gap: ${theme.spacings.small};
        margin-bottom: 6.4rem;
    `}
`

export const SmallBook = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings.xxsmall};
        margin-top: ${theme.spacings.xsmall};
    `}
`