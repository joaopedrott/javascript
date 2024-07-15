import styled, { DefaultTheme, css } from "styled-components";
//OBS: Lembrando que nao tem componente pois estamos utilizando o componente button do proprio react, utilizando ele e estilizando o componente ja existente no react


//tipagem de dessas 3 variaveis. Trabalha em conjunto com a interface
type ButtonColors = 'primary' | 'secondary';
type ButtonSizes = 'small' | 'large';
type ButtonVariants = 'default' | 'outlined';

const buttonFullWidth = () =>css`
    width: 100%;
` 

//para alterar as dimensoes/tamanho do botao, o small e large
const buttonSize = { 
    small: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.small};
        height: 3.2rem;
        padding: 0 ${theme.spacings.xxxsmall};
    `,
    large: (theme: DefaultTheme)=> css`
        font-size: ${theme.font.sizes.medium};
        height: 4.6rem;
        font-weight: bold;
        padding: 0 ${theme.spacings.xsmall};
    `
}

//para alternar entre dois tipos/estilos de botoes: o default e outlined
const buttonVariant = {
    default: (color: ButtonColors, theme: DefaultTheme)=> css`
        background-color: ${theme.colors[color]};
        color: ${theme.colors.white};
    `,
    outlined:(color: ButtonColors, theme: DefaultTheme)=> css`
        background-color: transparent;
        border: 0.2rem solid ${theme.colors[color]};
        color: ${theme.colors[color]};
    `
}

//interface para assegurar os tipos de props passadas para o componente botao seja baseada nessa interface.
//Essas props sao opcionais ('?') pois tem valores padroes no estilo do componente button
interface ButtonProps {
    variant?: ButtonVariants;
    color?: ButtonColors;
    size?: ButtonSizes;
    fullWidh?: boolean;
}

//Estilos do componente button
export const Button = styled.button<ButtonProps>`
    ${({ theme, variant = 'default', color = 'primary', size= 'large', fullWidh = false })=>css`
        display: block;
        border-radius:  ${theme.border.radius.default};
        border: 0;
        cursor: pointer;

        &:hover {
            filter: brightness(90%);
        }

        ${buttonVariant[variant](color, theme)};
        ${buttonSize[size](theme)};
        ${fullWidh && buttonFullWidth()}
    `}
`

