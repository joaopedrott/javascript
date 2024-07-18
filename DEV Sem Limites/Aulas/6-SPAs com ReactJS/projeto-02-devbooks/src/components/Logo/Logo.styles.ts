import styled, { css } from "styled-components";

export const Container = styled.div`    
 ${({theme})=>css`
    display: flex;
    align-items: center;

    svg {
        height: 4rem;
        width: 4rem;
        color: ${theme.colors.secondary};
    }

    span {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.weight.bold};
        margin-left: ${theme.spacings.xxxxsmall};
        
    }
 `}
`