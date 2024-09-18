import styled, { css } from "styled-components";
import { SpinnerProps } from "./Spinner";

export const Container = styled.div<SpinnerProps>`
    ${({theme, size})=>css`
        display: inline-block;
        width: ${size}px ;
        height: ${size}px;
        border-radius: 50%;
        border: 0.2rem solid ${theme.colors.white};
        border-top: 0.2rem solid transparent;
        animation: spin 800ms linear infinite;

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    `}

`

