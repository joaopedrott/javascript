import gitlogo from '../assets/github.png'
import Input from '../components/Input'

import { Container } from './styles'
function App() {
  return (
    <Container>
      <img src={gitlogo} width ={72} height={72} alt="github logo"/>
      <Input/>
    </Container>
  );
}

export default App;
