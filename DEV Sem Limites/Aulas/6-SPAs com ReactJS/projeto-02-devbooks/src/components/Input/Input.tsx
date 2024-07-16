import { InputHTMLAttributes } from 'react'
import { Container } from './Input.styles'

//essa interface diz quais tipos de dados o componente ira receber. com extends eu adiciono uma interface ja existente com todos as props tipadas em minha interface InputProps que acabei de fazer.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    label: string;
    error?: string;
}

//aqui esta o meu componente input que ira receber id,label, error e todas as props que o input tera direito a receber
export function Input ({id, label,error, ...props }: InputProps) {
    return (
        <Container error={Boolean(error)}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" {...props} />
            {error && <p>{error}</p>}
        </Container>
    )
}