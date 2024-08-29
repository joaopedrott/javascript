import styled, { css } from 'styled-components'

export const BooksList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};
    list-style: none;
  `}
`