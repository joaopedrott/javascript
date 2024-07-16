import { Button } from "../../../components/Button/Button.styles";
import { Input } from "../../../components/Input";

export function SingIn() {

    return(
        <div style={{width: 600}}>
            <h1>Faca seu login!</h1>
            <Input id="email" label="Email" type="email" error="Email e obrigatorio"/>
            <Input id="password" label="Senha" type="password"/>
            <Button fullWidh={true}>Entrar</Button>
        </div>
    )
}