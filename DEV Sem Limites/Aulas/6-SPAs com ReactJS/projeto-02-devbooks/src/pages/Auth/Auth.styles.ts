import styled from "styled-components";
import { css } from "styled-components";
//todo o container
export const Container = styled.div`  
    ${({theme})=>css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${theme.spacings.large};
        height: 100vh;


    `}

  `
//toda a pagina do formulario
  export const FormContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        max-width: 50rem;
        width: 100%;

        button {
            margin-top: ${theme.spacings.xsmall} ;
        }
    `}
  `
//logo do devbooks
  export const LogoContainer = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;

  
  `
// Faca seu login! e nao tem uma conta? cadastre-se
  export const Heading = styled.div`
    ${({theme})=>css`
        margin-bottom: ${theme.spacings.medium};

        h1 {
            margin-bottom: ${theme.spacings.xxsmall};
        }
    `}
  `
//somente os inputs
export const InputContainer = styled.div`
    ${({ theme }) => css`
        & + & {
            margin-top: ${theme.spacings.xsmall};
        }
    `}


    
  `