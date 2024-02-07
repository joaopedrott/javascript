import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api'
import { Column, Container,CriarText, EsqueciText,Row,SubtitleLogin, Title, TitleLogin,Wrapper } from './styles'

const schema = yup.object({
    email: yup.string().email('email nao e valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  }).required()


const Login = () => {
    const navigate = useNavigate();

    const { control,handleSubmit,formState: { errors },
      } = useForm({
        resolver:yupResolver(schema),
        mode: 'onChange',
      });


      const onSubmit= async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length ===1){
                //usuario encontrado
                navigate('/feed')
            }else {
                alert('Email ou senha invalido')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };
    
   
    return (<>
    <Header/>
    <Container>
        <Column>
            <Title>
                A plataforma para voce aprender com experts, dominar as principais tecnologias e entrar mais rapido nas empresas mais desejadas.
            </Title>
            

        </Column>
        <Column>
        <Wrapper>
            <TitleLogin>Faca seu cadastro</TitleLogin>
            <SubtitleLogin>Faca seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>} />
                <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>} />
                <Button title="Entrar" variant='secondary'  type="submit" />
            </form>
            <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
            </Row>
        </Wrapper>

        </Column>
    </Container>

    </>)
}

export { Login }