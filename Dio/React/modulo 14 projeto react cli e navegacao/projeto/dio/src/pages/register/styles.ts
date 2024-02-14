import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


`

export const Column = styled.div`
    flex: 1;
`

export const Title= styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: white;
`

export const TitleCadastro= styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitle = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 35px;

`
export const Wrapper = styled.div`
    max-width: 300px;

`
export const TextLegend = styled.p`
    margin-top: 35px;
    margin-bottom: 35px;
        font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 390px;

`

export const TextCountExist = styled.p`
font-family: Open Sans;
font-size: 14px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;

`
export const Link = styled.a`
    color: #23DD7A;
    text-decoration: none;
    cursor: pointer;
`