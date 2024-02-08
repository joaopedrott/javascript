import React from 'react'
import logo from '../../assets/logo-dio.png'
import banner from '../../assets/banner.png'
import { Button } from '../Button'
import {
    BuscarInputContainer,

    Row,
    Container,
    Input,
    Menu,
    MenuRight,

    Wrapper,
    UserPicture

} from './styles'
import { useNavigate } from 'react-router-dom';

const Header=({autenticado})=> {
    const navigate = useNavigate();
    const handleClickLogin=()=>{
        navigate('/login')
    }
    const handleClickRegister=()=>{
        navigate('/register')
    }
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO"/>
                {autenticado?(
                    <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu></>
                ):null}


            </Row>

            <Row>
                {autenticado ? (<>
                    <UserPicture src="https://avatars.githubusercontent.com/u/13596247?v=4"/>
                </>): (<>
                    <MenuRight href='$'> </MenuRight>
                <Button onClick={handleClickLogin} title="Entrar"/>
                <Button onClick={handleClickRegister} title="Cadastrar"/>
                </>)}

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }