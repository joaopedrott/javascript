import { Button } from "../../../components/Button/Button.styles";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo/Logo";

import { Container,FormContainer,LogoContainer,InputContainer,Heading } from '../Auth.styles'

export function SingUp() {

    return(
        <Container>
            <FormContainer>

                <LogoContainer>
                    <Logo/>
                </LogoContainer>
                
                <Heading>
                <h1>Cadastre-se de graca</h1>
                <p>
                    Ja tem uma conta? 
                    <Link color="secondary" to="/">Entrar</Link>
                </p>
                </Heading>

                <InputContainer>
                    <Input id="name" label="Nome Completo" type="text" />
                </InputContainer>
            
                <InputContainer>
                    <Input id="email" label="Email" type="email" />
                </InputContainer>

                <InputContainer>
                    <Input id="password" label="Senha" type="password"/>
                </InputContainer>
                
                <Button fullWidh={true}>Entrar</Button>
                
            </FormContainer>

        </Container>
    )
}