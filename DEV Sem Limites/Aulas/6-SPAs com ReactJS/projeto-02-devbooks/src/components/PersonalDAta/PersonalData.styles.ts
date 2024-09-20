import styled, { css } from "styled-components";

export const AvatarContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        gap: ${theme.spacings.xsmall};
        align-items: center;
    `}
`

export const UpdateProfileContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacings.xsmall};
        margin-top: ${theme.spacings.medium};
    `}
`