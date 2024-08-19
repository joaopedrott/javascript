import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Avatar, Container, HeaderContainer, NavContainer } from "./Header.styles";
import { SearchBox } from "../SearchBox";

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

                    <SearchBox/>
                </NavContainer>

                <Avatar>
                    <span>JP</span>
                </Avatar>
            </HeaderContainer>

        </Container>
    )
}