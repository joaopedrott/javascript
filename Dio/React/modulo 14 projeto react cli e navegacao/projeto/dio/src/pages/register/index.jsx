 import { Container,Column,Title,TitleCadastro,SubTitle,Wrapper,TextLegend,TextCountExist,Link } from './styles'; 
 import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { MdEmail, MdLock } from 'react-icons/md';
import { RiUser3Fill } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    email: yup.string().email('email nao e valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  }).required()

const Register =()=>{
    const navigate = useNavigate();
      const { control,handleSubmit,formState: { errors },
    } = useForm({
      resolver:yupResolver(schema),
      mode: 'onChange',
    });
    
    const handleClickLogin=()=>{
        navigate('/login')
    }
    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubTitle>Crie sua conta e make the change._</SubTitle>
                <Wrapper>
                <form /* onSubmit={handleSubmit()} */>
                    <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" type="name" leftIcon={<RiUser3Fill/>} />
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail/>} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>} />
                    <Button title="Criar minha conta" variant='secondary'  type="submit" />
                </form>
                </Wrapper>
                <TextLegend>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextLegend>
                <TextCountExist>Já tenho conta. <Link onClick={handleClickLogin}>Fazer login</Link></TextCountExist>
            </Column>
            
        </Container>
    
    </>
    )
}

export {Register}