import styled, { css } from "styled-components";

interface ContainerProps {
    error?: boolean
}

export const Container = styled.div<ContainerProps>`

    ${({theme, error})=>css`
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: ${theme.spacings.xxxsmall};
        }
        
        input {
            height: 4.6rem;
            border-radius: ${theme.border.radius.default};
            padding: ${theme.spacings.xxsmall};
            font-size: ${theme.font.sizes.medium};
            border: 0.2rem solid;
            border-color: ${error ? theme.colors.danger.main : theme.colors.gray};
            outline: none;
            transition: all 0.5s;

            &:focus {
                border: 0.2rem solid ${theme.colors.primary};
            }

        }

        p {
            margin-top: ${theme.spacings.xxxsmall};
            color: ${theme.colors.danger.main};
        }
    `}

`
