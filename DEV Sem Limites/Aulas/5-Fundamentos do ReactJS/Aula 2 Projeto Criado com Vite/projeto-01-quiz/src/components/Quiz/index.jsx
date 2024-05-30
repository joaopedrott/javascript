import { useState } from 'react';

import {  QuestionAnswer  } from '../QuestionAnswer'

import S from './styles.module.css'
import { Button } from '../Button';

const QUESTIONS = [
    {
        id: 1,
        question: 'Qual o meu nome?',
        answers: ['Miguel', 'Luiz', 'Matheus', 'Ana'],
        correctAnswer: 'Matheus',
    },
    {
        id: 2,
        question: 'Qual e a minha idade?',
        answers: ['12', '2', '26', '32'],
        correctAnswer: '26',
    },
    {
        id: 3,
        question: 'O que eu sou?',
        answers: ['Desenvolvedor', 'Medico', 'Eletricista', 'Jogador de Futebol'],
        correctAnswer: 'Desenvolvedor',
        
    },
    {
        id: 4,
        question: 'Quem e Daniel?',
        answers: ['Homem de ferro', 'Super man', 'Homem aranha', 'Homem formiga'],
        correctAnswer: 'Homem formiga',
    },
]




export function Quiz () {
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const  [correctAnsersCount, setCorrectAnsersCount] = useState(0)
    const [isCurrentQuestionAswerd, setIsCurrentQuestionAswerd] = useState(false)

    const handleAnswerQuestion = (event, question, answer) => {
        if(isCurrentQuestionAswerd){/* a pergunta ja foi respondida?(true?) */
            return //acaba a funcao
        }//caso false contrario, continua com a resolucao da questao

        const isCorretAnser= question.correctAnswer === answer /* se a resposta for igual a respostaCorreta= True */

        const resultClassName = isCorretAnser ? S.correct : S.incorrect
        event.currentTarget.classList.toggle(resultClassName) 

        if(isCorretAnser){ /* se true */
            setCorrectAnsersCount(correctAnsersCount + 1) /* mais um ponto */
            /* event.currentTarget.classList.toggle(S.correct) */
        } /* else {
            event.currentTarget.classList.toggle(S.incorrect)
        } */

        setIsCurrentQuestionAswerd(true) //pergunta respondida
    }

    //paginacao de pergunta (Questions)
    //so avanca para a proxima pergunta se a pergunta atual
    //Ou seja, paginacao entre as perguntas usando a mudanca de estado do index!
    const handleNextQuestion = ()=> {
        if(currentQuestionIndex + 1 < QUESTIONS.length){
            setCurrentQuestionIndex(index => index+1)
        } //avanca para a proxima pergunta

        setIsCurrentQuestionAswerd(false)//reseta para pergunta nao respondida
    }

    //questao atual recebe a Questions[index atual]
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    return (
        <div className={S.container}>
            <div className={S.card}>
                <div className={S.quiz}>
                    <header className={S.quizHeader}>
                        <span className={S.questionCount}>Pergunta 1/3</span>
                        <p className={S.question}>{currentQuestion.question}</p> {/* Nome da pergunta */}
                    </header>


                    <ul className={S.answers}>
                        {currentQuestion.answers.map(answer =>( /* possiveis respostas da pergunta */
                        <li key={answer} className={S.answerItem}> 
                        {/* OBS: quando fazemos map de uma lista devemos passar a key */}

                        {/* fazemos uma lista de botoes de possiveis respostas a serem escolhidas */}
                        {/* Lembrando que QuestionAnswer eh um componente botao */}
                        <QuestionAnswer answer={answer} question={currentQuestion}
                            handleAnswerQuestion={handleAnswerQuestion}
                                //passagem de parametro para outro componente eh chamado de props
                            /> 
                        </li>
                       /*  Explicacao
                        Quando o botao eh clicado (<QuestionAnswer/>), oque esta escrito nele (answer={answer}), eh enviado como props junto com toda a questao a qual ele se refere (question={currentQuestion}) e a funcao para verificar se a resposta esta correta ou nao (handleAnswerQuestion={handleAnswerQuestion}) */
                        ))}

                    </ul>
                    {isCurrentQuestionAswerd && (<Button onClick={handleNextQuestion}>Proxima Pergunta</Button>) }
                </div>
            </div>
        </div>
    )
}

