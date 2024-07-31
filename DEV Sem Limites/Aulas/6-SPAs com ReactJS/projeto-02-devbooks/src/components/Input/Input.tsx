import { InputHTMLAttributes, forwardRef } from 'react'
import { Container } from './Input.styles'

//essa interface diz quais tipos de dados o componente ira receber. com extends eu adiciono uma interface ja existente (HTMLInputElement) com todos as props tipadas em minha interface InputProps que acabei de fazer.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    label: string;
    error?: string;
}

//aqui esta o meu componente input que ira receber id,label, error e todas as props que o input tera direito a receber
export default forwardRef <HTMLInputElement, InputProps>(
    function Input ({id, label,error, ...props },ref) {
        return (
            <Container error={Boolean(error)}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type="text" {...props} ref={ref}/>
                {error && <p>{error}</p>}
            </Container>
        )
    }
)

//obs adicionei forwardRef no import para o input receber ref como props pois nao eh permitido criar/definir uma ref como props manualmente. E envolvemos o componente com forwardRef.

