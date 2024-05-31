import { useState } from 'react';

import {  QuestionAnswer  } from '../QuestionAnswer'

import S from './styles.module.css'
import { Button } from '../Button';
import { Result } from '../Result';

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
    const [isTakingQuiz, setIsTakingQuiz] = useState(true)
    const quizSize = QUESTIONS.length //tamanho da quantidade de perguntas

    const handleAnswerQuestion = (event, question, answer) => {//verifica cada resposta de cada pergunta
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
    const handleNextQuestion = ()=> {//mudanda de perguntas
        if(currentQuestionIndex + 1 < quizSize){
                //avanca para a proxima pergunta
            setCurrentQuestionIndex(index => index+1)
        } else {
            setIsTakingQuiz(false)// desabilita as perguntas e habilita o componente de resultado
        }

        setIsCurrentQuestionAswerd(false)//reseta para pergunta nao respondida
    }

    const handleTryAgain = () => {//reseta o game
        setIsTakingQuiz(true)
        setCorrectAnsersCount(0)
        setCurrentQuestionIndex(0)
    }

    //questao atual recebe a Questions[index atual]
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const navigationButtonText = currentQuestionIndex +1 === quizSize ? 'Ver Resultado' : 'Proxima Pergunta'
    return (
        <div className={S.container}>
            <div className={S.card}>
                {isTakingQuiz ? (
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
                    {isCurrentQuestionAswerd && (<Button onClick={handleNextQuestion}>{navigationButtonText}</Button>) }
                </div>
                ): (<Result correctAnsersCount={correctAnsersCount} quizSize={quizSize} handleTryAgain={handleTryAgain} />)}
                {/* manda para o result respostas corretas, numero total de perguntas e a funcao de resetar o game */}
            </div>
        </div>
    )
}

