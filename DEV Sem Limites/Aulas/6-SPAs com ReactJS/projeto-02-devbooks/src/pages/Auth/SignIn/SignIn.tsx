import { Button } from "../../../components/Button/Button.styles";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo/Logo";

import { Container,FormContainer,LogoContainer,InputContainer,Heading } from '../Auth.styles'

export function SingIn() {

    return(
        <Container>
            <FormContainer>

                <LogoContainer>
                    <Logo/>
                </LogoContainer>
                
                <Heading>
                <h1>Faca seu login!</h1>
                <p>
                    Nao tem uma conta? 
                    <Link color="secondary" to="/">cadastre-se</Link>
                </p>
                </Heading>
                
            
                <InputContainer>
                    <Input id="email" label="Email" type="email" error="Email e obrigatorio"/>
                </InputContainer>

                <InputContainer>
                    <Input id="password" label="Senha" type="password"/>
                </InputContainer>
                
                <Button fullWidh={true}>Entrar</Button>
                
            </FormContainer>

        </Container>
    )
}