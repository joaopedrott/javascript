import S from './styles.module.css'

import { Button } from "../Button";

interface ResultProps {
    correctAnsersCount: number
    quizSize: number
    handleTryAgain:()=>void
}

export function Result (props: ResultProps) {

    return (
        <div className={S.container}>
            <h1 className={S.title}>Resultado</h1>
            <h2 className={S.subtitle}>Voce acertou {props.correctAnsersCount} de {props.quizSize} perguntas!</h2>
            <Button onClick={props.handleTryAgain}>Tente Novamente</Button>
        </div>
    )
}