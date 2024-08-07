import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo";

import { Container,FormContainer,LogoContainer,InputContainer,Heading } from '../Auth.styles'
import { useAuth } from "../../../hooks/useAuth";

const validationSchema =z.object({//esquema de validacao de nome, email e password
    name: z.string().min(1, {message: 'Nome eh obrigatorio'}),
    email: z.string().min(1, {message: 'Email eh obrigatorio!'}).email({message: 'Insira um email valido'}),
    password: z.string().min(8,{message: 'A senha deve ter pelo menos 8 caracteres'})
})

type SignUpForm =z.infer<typeof validationSchema>//tipagem dos dados. Substitui a interface


export function SingUp() {
    const {register, handleSubmit, formState: {errors}} = useForm<SignUpForm>({
        resolver: zodResolver(validationSchema)
    })
    const { signUp } = useAuth()//pega a funcao signIp que esta globalmente definida como contexto (context api)

    const onSubmit: SubmitHandler<SignUpForm>= async(data)=>{//faz cadastro
        await signUp(data)
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
                        <Input id="name" label="Nome Completo" type="text" error={errors.name?.message} {...register('name')} />
                    </InputContainer>
                
                    <InputContainer>
                        <Input id="email" label="Email" type="email" error={errors.email?.message} {...register('email')}/>
                    </InputContainer>

                    <InputContainer>
                        <Input id="password" label="Senha" type="password" error={errors.password?.message} {...register('password')}/>
                    </InputContainer>
                    
                    <Button fullWidh={true}>Cadastrar</Button>
                </form>
                
            </FormContainer>

        </Container>
    )
}