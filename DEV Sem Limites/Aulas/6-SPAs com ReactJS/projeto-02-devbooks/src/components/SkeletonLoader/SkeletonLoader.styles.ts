import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -20rem 0;

    }

    100% {
        background-position: 20rem 0;
    }
`


interface ContainerProps {
    width: string
    height: string
}

export const Container = styled.div<ContainerProps>`
    ${({theme,width,height})=>css`
        display: inline-block;
        border-radius: ${theme.border.radius.small};
        background: linear-gradient(90deg, #ecf1f6 25%, #dce5ee 50%, #ecf1f6 75%);
        background-size: 200% 100%;
        width: ${width};
        height: ${height};
        animation: ${shimmer} 1.5s infinite;
    `}


`

