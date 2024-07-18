import styled, { css } from "styled-components";
import { Link as LinkRRD } from 'react-router-dom'

type LinkColors= 'primary' | 'secondary'

interface LinkProps {
    color?: LinkColors;
}

export const Link = styled(LinkRRD)<LinkProps>`
    ${({theme, color='primary'})=>css`
        font-weight: ${theme.font.weight.normal};
        text-decoration: none;
        color:${theme.colors[color]} ;

        &:hover{
            filter: brightness(90%);
        }
    `}
`