import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo";

import { Container,FormContainer,LogoContainer,InputContainer,Heading } from '../Auth.styles'
interface SignUpForm {
    name: string
    email: string
    password: string
}
export function SingUp() {
    const {register, handleSubmit} = useForm<SignUpForm>()

    const onSubmit: SubmitHandler<SignUpForm>= async(data)=>{
        console.log(data)
    }

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

                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <Input id="name" label="Nome Completo" type="text" {...register('name')} />
                    </InputContainer>
                
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