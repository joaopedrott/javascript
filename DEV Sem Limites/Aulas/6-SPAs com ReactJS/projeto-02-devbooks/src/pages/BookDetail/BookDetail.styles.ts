import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;

`

export const ContentContainer = styled.div`
${({theme})=> css`
width: 65%;
display: flex;
flex-direction: column;
    h2{
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.weight.normal};
        color: ${theme.colors.secondary};
        margin-top: ${theme.spacings.medium};
    }
`}
`

export const PublisherContainer = styled.div`
margin-top: 0.4rem;
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

    &:not(&:first-child){
        padding-left: 1.4rem;
    }

    &:not(&:last-child){
        padding-right: 1.4rem;
        border-right: 0.1rem solid ${theme.colors.gray};
    }

    strong {
        display: flex;
        font-size: ${theme.font.sizes.medium};
    
        svg {
            height: 1.6rem;
            width: 1.6rem;
            margin-left: ${theme.spacings.xxsmall};
        }
    }



    span {
        font-size: ${theme.font.sizes.medium};
        margin-top: ${theme.spacings.xxsmall};

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
${({theme})=> css`
    margin-top: 6rem;


    h3{
        margin-bottom: ${theme.spacings.small};
    }
`}
`

export const Description = styled.p`
${({theme})=> css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom ${theme.spacings.xsmall};
`}
`

export const ThumbnailContainer = styled.div`

    position:  relative;

`

export const Thumbnail = styled.img`
${({theme})=> css`
    object-fit: fill;
    width: 30rem;
    border-radius: ${theme.border.radius.small};
    position: absolute;
    right: 0;
    z-index: 10;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`}
`

export const BackgroundThumbnail = styled.img`
${({theme})=> css`
    filter: blur(1rem);
    opacity: 50%;
    width: 30rem;
    position: absolute;
    right: -2rem;
    top: 2rem;
`}
`