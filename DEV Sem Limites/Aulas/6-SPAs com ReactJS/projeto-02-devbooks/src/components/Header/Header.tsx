import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Avatar, Container, HeaderContainer, NavContainer } from "./Header.styles";

import { Search } from "../Search";

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
                <Avatar>
                    <span>JP</span>
                </Avatar>
            </Link>
            </HeaderContainer>

        </Container>
    )
}