import { ButtonHTMLAttributes  } from 'react'
import S from './styles.module.css'

//interface para tipagem
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
//OBS: como o botao recebe atributos que ele ja espera receber, a tipagem deve ser feita dessa forma com ButtonHTMLAttributes

export function Button (props: ButtonProps) {
    return (
        <button className={S.container} {...props}>
            {props.children}
        </button>
    )
}

/* 

Antes o button tinha onClick={props.onClick} depois ficou {...props}.
Assim o button podera receber todo e qualquer tipo de props que ele receber e que tambem for esperado pelo button

*/