import { Link } from "react-router-dom";

import { Logo } from "../Logo";
import { Search } from "../Search";
import { Avatar } from "../Avatar";

import { Container, HeaderContainer, NavContainer } from "./Header.styles";




export function Header () {
    return (
        <Container>
            <HeaderContainer>
                <NavContainer>
                    <Logo/>

                    <nav>
                        <Link to='/home' >Home</Link>
                        <Link to='/meus-livros' >Meus Livros</Link>
                        <Link to='/favoritos' >Favoritos</Link>
                    </nav>

                    <Search/>
                </NavContainer>

            <Link to='/perfil'>
                <Avatar  />
            </Link>
            </HeaderContainer>

        </Container>
    )
}