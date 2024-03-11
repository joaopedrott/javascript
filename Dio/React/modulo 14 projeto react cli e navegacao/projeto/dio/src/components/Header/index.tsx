
import logo from '../../assets/logo-dio.png'

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
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAyth';


const Header=()=> {

    const { user, handleSignOut } = useAuth();
    
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
                <Link to="/">
                    <img src={logo} alt="Logo da DIO"/>
                </Link>
                {user.id?(
                    <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu></>
                ):null}
            </Row>

            <Row>
                {user.id ? (
                <>
                    <UserPicture src="https://avatars.githubusercontent.com/u/13596247?v=4"/>
                    <a href='#' onClick={handleSignOut}>Sair</a>
                </>
                ) : (
                <>
                    <MenuRight href='$'> </MenuRight>
                    <Button onClick={handleClickLogin} title="Entrar"/>
                    <Button onClick={handleClickRegister} title="Cadastrar"/>
                </>
                )}

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }