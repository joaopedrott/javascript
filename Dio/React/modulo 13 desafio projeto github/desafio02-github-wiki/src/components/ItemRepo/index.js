import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({repo,hangleRemoveRepo}) {
  const hangleRemove =()=> {
    hangleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer onClick={hangleRemove} >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank'>Ver repositorio</a><br/>
        <a href='#'className='remover'>Remover</a>
        <hr/>
        
    </ItemContainer>
  )
}

export default ItemRepo;

