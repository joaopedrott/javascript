import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;

`

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
width: 65%;
`

export const TitleContainer = styled.div`
${({theme})=>css`
margin-bottom: ${theme.spacings.medium};
`}
`

export const PublisherContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const DetailsContainer = styled.div`
${({theme})=> css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.medium};
`}
`
export const DetailColumn = styled.div`
${({theme})=> css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    &:not(&:first-child){
        padding-left: 1.4rem;
    }

    &:not(&:last-child){
        padding-right: 1.4rem;
        border-right: 0.1rem solid ${theme.colors.gray};
    }


`}
`

export const ButtonsContainer = styled.div`
${({theme})=> css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};
`}
`

export const DescriptionContainer = styled.div`
    margin-top: 6rem;
`

export const Description = styled.div`
${({theme})=> css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top ${theme.spacings.xsmall};
`}
`
