import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row, Title } from './styles'
import { useState } from 'react'




const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev=>`${prev === '0' ? '' : prev}${num}`);
  }  

  const handleSumNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      /* console.log(firstNumber, Number(currentNumber)); */
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      
      /* console.log(sum) */
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '*':
          handleMulNumbers();
          break;
        default:
          break;
      }
    }
  }

  const handleRemNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      /* console.log(firstNumber, Number(currentNumber)); */
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setFirstNumber('0');
      
      /* console.log(rem) */
    }
  }

  const handleMulNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      /* console.log(firstNumber, Number(currentNumber)); */
      const mul = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mul));
      setFirstNumber('0');
      
      /* console.log(mul) */
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      /* console.log(firstNumber, Number(currentNumber)); */
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('0');
      
      /* console.log(div) */
    }
  }
  
 
  return (
    <Container>
      
      <Content>
      <Title>Projeto Calculadora</Title>
        <Input value={currentNumber} />
        <Row>
          <Button label={"."} onClick={() =>handleAddNumber('.')}  />
          <Button label={"/"} onClick={handleDivNumbers} />
          <Button label={"c"} onClick={handleOnClear} />
          <Button label={"x"} onClick={handleMulNumbers} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() =>handleAddNumber('7')} />
          <Button label={"8"} onClick={() =>handleAddNumber('8')} />
          <Button label={"9"} onClick={() =>handleAddNumber('9')} />
          <Button label={"-"} onClick={handleRemNumbers} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() =>handleAddNumber('4')} />
          <Button label={"5"} onClick={() =>handleAddNumber('5')} />
          <Button label={"6"} onClick={() =>handleAddNumber('6')} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() =>handleAddNumber('1')} />
          <Button label={"2"} onClick={() =>handleAddNumber('2')} />
          <Button label={"3"} onClick={() =>handleAddNumber('3')} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
        <Row>
        <Button label={"0"} onClick={() =>handleAddNumber('0')} />
        </Row>



      </Content>
    </Container>
  );
}

export default App;
