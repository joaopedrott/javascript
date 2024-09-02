import styled, { css } from "styled-components";

export const Container = styled.div`
${({theme})=>css`
    background-color: ${theme.colors.mainBackground};
    padding-bottom: 6.4rem;
    min-height: 100vh;
`}

`

export const Main = styled.main`
    max-width: 120rem;
    width: 100%;
    margin: 6.4rem auto;
    padding: 0 2rem;

`
