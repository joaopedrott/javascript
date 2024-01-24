
import { useState } from 'react';
import gitlogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api'

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async() => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo=> repo.id ===data.id);
      if(!isExist){
        setRepos(prev=>[...prev, data])
        setCurrentRepo('');
        return
      }
      
    }alert("Repositorio nao encontrado!")
      
  }
  
  const hangleRemoveRepo=(id)=>{
    
    const result = repos.filter(repo=> repo.id!==id);
    setRepos(result)

    //console.log('Removendo registro', id)
  }

  
  return (
    <Container>
      <img src={gitlogo} width ={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e)=>setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} hangleRemoveRepo={hangleRemoveRepo}/>)}
      
    </Container>
  );
}

export default App;
