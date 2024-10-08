
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'


import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo";

import { Container,FormContainer,LogoContainer,InputContainer,Heading } from '../Auth.styles';
import { useAuth } from "../../../hooks/useAuth";
import { AlertBanner } from "../../../components/AlertBanner";
import { useError } from "../../../hooks/useError";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const validationSchema =z.object({//esquema de validacao de email e password
    email: z.string().min(1, {message: 'Email eh obrigatorio!'}).email({message: 'Insira um email valido'}),
    password: z.string().min(8,{message: 'A senha deve ter pelo menos 8 caracteres'})
})

// typeof pega o tipo de dados. Substituindo a interface
type SignInForm = z.infer<typeof validationSchema>

export function SingIn() {
    //register busca o valor que foi escrito no input (ele atua exatamente com o ref)
    const {register, handleSubmit, formState: {errors}} = useForm<SignInForm>({
        resolver: zodResolver(validationSchema)//integracao do zod com react hookform
    })
    const { signIn, isAuthenticated } =useAuth()//pega a funcao signIn que esta globalmente definida como contexto (context api)
    const { error,handleError,clearError }=useError()
    const location = useLocation()//22
    const navigate = useNavigate()//22

    const from = location.state?.from?.pathname || 'home'//22

    const onSubmit: SubmitHandler<SignInForm>= async(data)=>{//faz login
        try {
            clearError()
            await signIn(data)

            navigate(from)//22
        } catch (error) {

            handleError(error)

        }
    }

    if (isAuthenticated) {
//faz com que se o usuario estiver logado, ele nao tenha acesso a pagina de login. Sempre iniciando na pagina Home.
        return <Navigate to="/home" />
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
                        <Input 
                        id="email" 
                        label="Email" 
                        type="email" 
                        error={errors.email?.message} 
                        {...register('email')}/>
                    </InputContainer>

                    <InputContainer>
                        <Input 
                        id="password" 
                        label="Senha" 
                        type="password" 
                        error={errors.password?.message}
                        {...register('password')}/>
                    </InputContainer>
                    
                    <Button fullWidh={true}>Entrar</Button>

                    {error && <AlertBanner variant="error" message={error}/>}
                </form>
                
            </FormContainer>

        </Container>
    )
}