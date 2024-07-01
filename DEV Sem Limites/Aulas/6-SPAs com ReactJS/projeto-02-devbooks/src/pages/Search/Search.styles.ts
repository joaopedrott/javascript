import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
padding: 20px;

h1 {
    margin-bottom: 24px;
    color: #222;
}
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 800px;
    width: 100%;
`

export const SearchButton = styled.button `
    padding: 0 12px;
    height: 48px;
    border-radius: 32px;
    background-color: #ef552b;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin-left: 8px;
    cursor: pointer;
    border: 0;
    transition: 0.5s all;

    &:hover {
        filter: brightness(90%);
    }
    
`
