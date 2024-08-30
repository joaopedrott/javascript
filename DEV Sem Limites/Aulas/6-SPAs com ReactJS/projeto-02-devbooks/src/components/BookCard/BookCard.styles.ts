import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall}; /* problema */
    border-radius: ${theme.border.radius.default};
    
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    border: 0.1rem solid ${theme.colors.gray};
    background-color: ${theme.colors.white};

    &:hover {
      h2 {
        color: ${theme.colors.secondary};
      }
    }
  `}
`

export const Thumbnail = styled.img`
  ${({ theme }) => css`
    object-fit: fill;
    /* margin: 0 auto; */
    
    border: ${theme.border.radius.small};

    max-width: 16rem; 
    height: 22rem;  
  
  `}
`

const clampText = css`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      font-weight: ${theme.font.weight.normal};
      font-size: ${theme.font.sizes.large};
      line-height: 2.4rem;
      margin-top: ${theme.spacings.xxsmall};
      color: ${theme.colors.blue};

      ${clampText}
    }

    h3 {
      font-size: ${theme.font.sizes.small};
      margin-top: 0.4rem;
      font-weight: normal;
      display: flex;
      color: ${theme.colors.blue};

      svg {
        height: 1.6rem;
        margin-left: 0.4rem;
      }
    }
  `}
`