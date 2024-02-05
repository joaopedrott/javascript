import { useState, useEffect, useMemo, useCallback } from 'react'
import { Button } from '../components/Button';


const Teste=()=> {

 /*
 //modulo 16  
//aula2 useState kook
//guardar estado de um componente
 //Exemplo de uso de useState para guardar o nome digitado e em seguida o nome eh imprimido no console
    const [nomes, setNomes] = useState([]);
    const [nome, setNome] = useState('');
  
    function handleInputChange(event) {
      setNome(event.target.value);
    }
  
    function handleAddButtonClick() {
      const newNomes = [...nomes];
      newNomes.push(nome);
      setNomes(newNomes);
      setNome('');
    }
  
    function handlePrintButtonClick() {
      console.log(nomes);
    }
  
    return (
      <div>
        <input value={nome} onChange={handleInputChange}/>
        <button onClick={handleAddButtonClick}>Adicionar</button>
        <button onClick={handlePrintButtonClick}>Imprimir</button>
      </div>
    ); */
//--------------------------------------------------------------------------------------------------------
//modulo 16  
//aula2 useState hook
    /* 
    
     const [name, setName] = useState('Pablo');


    const handleChangeName =()=>{
        setName('Jose')
    }
    return (
    <div>
        <p>
            {name}
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  ) */
  //--------------------------------------------------------------------------------------------------------
  //modulo 16 
  //aula 4 useMemo hook
  /* const [age, setAge] = useState(26);


  const handleChangeName =()=>{
    setAge(prev => prev === 26? 32:26)
  }

  const calculo =useMemo(()=>{
    console.log('calculou',age)
    return 10 * age;
  },[age]);

  console.log('renderizou', calculo);
  return (
  <div>
      <p>
          {age}
      </p>
      <button onClick={handleChangeName}>Alterar</button>
  </div>
) */
//--------------------------------------------------------------------------------------------------------
//modulo 16 
  //aula 5 useCallback hook

  const [age, setAge] = useState(26);
  const [name, setName] = useState('Pablo');

  const handleChangeName =useCallback(()=>{
    console.log('Alterou nome')
    setName(prev => prev === 'Pablo'? 'Jose':'Pablo')
  },[])

  const handleChangeAge = useCallback(()=>{
    const newAge = 10* age;
    console.log('age atual ',age,'age final ', newAge)
    setAge(prev => prev === 26? 32:26)
  },[age])

 

  return (
  <div>
      <p>
          Idade: {age}
      </p>
      <br />
      <p>
        Nome: {name}
      </p>
      <br />
      <button onClick={handleChangeName}>Alterar Nome</button>
      <br />
      <button onClick={handleChangeAge}>Alterar Idade</button>
  </div>
)


} 

export { Teste }

