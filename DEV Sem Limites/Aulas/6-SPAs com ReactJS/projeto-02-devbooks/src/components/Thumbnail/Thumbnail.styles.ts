import styled, { css } from "styled-components";

interface ContainerProps {
    bgColor: string
    size: 'small' | 'large'
}

const containerCustomStyles = {
    small: () => css`
        height: 300px;
        width: 100%;
        border: 4px;

        svg {
            width: 120px;
            color: #fff
        }
    `,
    large: ()=> css`
        height: 100Vh;
        width: 50%;

        svg{
            width: 300px;
            color: #fff
        }
    `
}

const imageCustomStyles = {
    small: () => css`
        width: 120px;
    `,
    large: () => css`
        width: 50%;
    `,
}

export const Container = styled.div<ContainerProps>`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${(props)=> props.bgColor} ;
    transition: all 0.5s;

    ${(props)=> containerCustomStyles[props.size]}

    img {
        ${(props)=> imageCustomStyles[props.size] }
    }
  `