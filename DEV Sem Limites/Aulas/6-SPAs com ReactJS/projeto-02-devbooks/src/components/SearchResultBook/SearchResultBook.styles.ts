import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled(Link)`
    ${({theme})=>css`
        display: flex;
        border-radius: ${theme.border.radius.default};
        padding: ${theme.spacings.xxsmall};
        width: 100%;
        background-color: transparent;
        cursor: pointer;
        text-decoration: none;
        color: ${theme.colors.blue};

        &:hover {
            background-color: ${theme.colors.mainBackground};
        }
    `}

`

export const Thumbnail = styled.img`
    ${({theme})=>css`
        width: 6rem;
        background-color: ${theme.colors.gray};
        margin-right: ${theme.spacings.xsmall};
        object-fit: fill;
        border-radius: ${theme.border.radius.small};
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    `}
`

export const Details = styled.div`
    ${({theme})=>css`
        flex: 1;

        h2 {
            font-weight: ${theme.font.weight.normal};
            font-size: ${theme.font.sizes.large};
        }

        h3 {
            font-size: ${theme.font.sizes.small};
            margin-top: 0.4rem;
            font-weight: ${theme.font.weight.normal};
        }
    `}
`