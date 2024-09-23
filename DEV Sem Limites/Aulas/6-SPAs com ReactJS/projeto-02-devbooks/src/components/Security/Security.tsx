import { Button } from "../Button";
import { Input } from "../Input";
import { Container, UpdatePasswordContainer } from "./Security.styles";

export function Security () {

    return (
        <Container>
            <h2>Segurancaa</h2>

            <UpdatePasswordContainer>
                <Input label="Senha Atual" type="password"/>
                <Input label="Nova Senha" type="password"/>
                <Button>Atualizar Senha</Button>
            </UpdatePasswordContainer>
        </Container>
    )
}