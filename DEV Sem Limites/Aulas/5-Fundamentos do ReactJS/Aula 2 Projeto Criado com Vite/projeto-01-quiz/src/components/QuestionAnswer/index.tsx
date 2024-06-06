import {MouseEvent} from 'react'
import S from './styles.module.css'
import { Question } from '../Quiz'
//componente botao



interface QuestionAnswerProps {//tipagem dos parametros
    answer: string //possivel respota da pergunta
    question: Question  // questao inteira
    handleAnswerQuestion: (event: MouseEvent<HTMLButtonElement>, question:Question, answer:string) => void
}//tipagem dentro de tipagem

export function QuestionAnswer (props: QuestionAnswerProps) {//props eh como se fosse um pacote com todos os parametros passados
    //neste caso o props tem: question, answer e handleAnswerQuestion
    return (
        <button 
        className={S.container}
        onClick={(event)=>props.handleAnswerQuestion(event, props.question, props.answer)}
        > {/* quando o botao eh apertado, */} 
            {props.answer} {/*o botao exibe o answer escrito nele, independente se foi apertado ou nao*/}
        </button>
    )
}

//OBS resposta da IA: props (abreviação de “propriedades”) é um objeto que contém todos os parâmetros passados para um componente React. Quando você cria um componente personalizado, como o exemplo que você compartilhou, você pode passar informações para ele através das props.