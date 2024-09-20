import styled, { css } from "styled-components";

import { AvatarProps } from "./Avatar";

export const Container = styled.div<AvatarProps>`
    ${({theme, size})=>css`
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.primary};
        height: ${size}px;
        width: ${size}px;
        border-radius: ${theme.border.radius.small};
        cursor: pointer;
        color: #fff;

        span {
            font-weight: ${theme.font.weight.normal};
        }

    `}
`