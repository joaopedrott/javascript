import { Link } from "react-router-dom";



import { Container, HeaderContainer, NavContainer } from "./Header.styles";




export function Header () {
    return (
        <Container>
            <HeaderContainer>
                <NavContainer>
                    

                    <nav>
                        <Link to='/' >Home</Link>
                        <Link to='/' >Meus Livros</Link>
                        <Link to='/' >Favoritos</Link>
                    </nav>

                    
                </NavContainer>


            </HeaderContainer>

        </Container>
    )
}