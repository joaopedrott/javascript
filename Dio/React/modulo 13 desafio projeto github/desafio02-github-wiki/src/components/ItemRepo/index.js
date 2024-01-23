import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Nome</h3>
        <p>Descricao</p>
        <a href='#'>Ver repositorio</a><br/>
        <a href='#' className='remover'>Remover</a>
        <hr/>
        
    </ItemContainer>
  )
}

export default ItemRepo;

