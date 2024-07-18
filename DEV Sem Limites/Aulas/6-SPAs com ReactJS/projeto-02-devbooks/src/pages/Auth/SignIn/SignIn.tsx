import { Button } from "../../../components/Button/Button.styles";
import { Input } from "../../../components/Input";
import { Link } from "../../../components/Link";
import { Logo } from "../../../components/Logo/Logo";

export function SingIn() {

    return(
        <div style={{width: 600}}>
            <Logo/>
            <h1>Faca seu login!</h1>
            <p>Nao tem uma conta? <Link color="secondary" to="/">cadastre-se</Link></p>
            <Input id="email" label="Email" type="email" error="Email e obrigatorio"/>
            <Input id="password" label="Senha" type="password"/>
            <Button fullWidh={true}>Entrar</Button>
        </div>
    )
}