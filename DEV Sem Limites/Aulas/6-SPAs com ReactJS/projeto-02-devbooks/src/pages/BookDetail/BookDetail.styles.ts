import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    

`
export const BackButton = styled.button`
    background-color: transparent;
    border: 0;
    outline: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    position: fixed;
    left: 20px;
    top: 20px;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 50%;
    padding: 48px;
    overflow-y: scroll;

`

export const Title = styled.h1`
    font-size: 54px;
    margin-bottom: 16px;
`
export const Subtitle = styled.h1`
    font-weight: normal;
    font-size: 36px;
    margin-bottom: 16px;
`

export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 16px;
`
export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
`