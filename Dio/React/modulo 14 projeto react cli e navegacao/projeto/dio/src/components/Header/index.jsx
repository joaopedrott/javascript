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

    Wrapper

} from './styles'


const Header=()=> {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO"/>
                <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>

            </Row>

            <Row>
                <MenuRight href='$'> </MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }