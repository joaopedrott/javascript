import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo";

import { Container,FormContainer,LogoContainer,InputContainer,Heading } from '../Auth.styles'

interface SignInForm {
    email: string
    password: string
}

export function SingIn() {
    const {register, handleSubmit} = useForm<SignInForm>()

    const onSubmit: SubmitHandler<SignInForm>= async(data)=>{
        console.log(data)
    }

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
                    <Link color="secondary" to="/cadastro">cadastre-se</Link>
                </p>
                </Heading>
                
            
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <Input id="email" label="Email" type="email" {...register('email')}/>
                    </InputContainer>

                    <InputContainer>
                        <Input id="password" label="Senha" type="password" {...register('password')}/>
                    </InputContainer>
                    
                    <Button fullWidh={true}>Entrar</Button>
                </form>
                
            </FormContainer>

        </Container>
    )
}