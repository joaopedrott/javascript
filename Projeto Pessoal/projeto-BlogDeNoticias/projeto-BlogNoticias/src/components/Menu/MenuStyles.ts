// src/components/MenuStyles.ts
import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  width: 100vw;  /* Ocupar 100% da largura da tela */
  background-color: #333;
  padding: 10px 0;
  margin: 0;
  box-sizing: border-box; /* Garantir que padding não afete o width */
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;  /* Itens organizados horizontalmente */
  justify-content: space-around; /* Distribuir os itens com espaço entre eles */
`;

export const MenuItem = styled.li`
  color: white;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;
