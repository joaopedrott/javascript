import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({theme})=>css`
    border-bottom: 0.1rem solid ${theme.colors.gray};
    background-color: #fff;

    `};
`

export const HeaderContainer = styled.div`
   max-width: 120rem ;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 7rem;
   padding: 0 2rem;
`

export const NavContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        align-items: center;
        width: 100%;

        nav{
            margin-left: ${theme.spacings.medium};

            a{
                margin: 0 ${theme.spacings.xsmall};
                font-weight: ${theme.font.weight.normal};
                text-decoration: none;
                color: ${theme.colors.blue};
            }
        }

    `}
`

export const Avatar = styled.div`
    ${({theme})=>css`
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${theme.colors.primary};
        height: 4rem;
        width: 4rem;
        border-radius: ${theme.border.radius.small};
        cursor: pointer;
        color: #fff;

        span {
            font-weight: ${theme.font.weight.normal};
        }

    `}
`