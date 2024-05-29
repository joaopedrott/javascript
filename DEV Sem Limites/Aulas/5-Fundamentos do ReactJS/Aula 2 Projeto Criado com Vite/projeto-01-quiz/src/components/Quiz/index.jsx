import {  QuestionAnswer  } from '../QuestionAnswer'

import S from './styles.module.css'

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
    const currentQuestion = QUESTIONS[0];

    const handleAnswerQuestion = (event, question, answer) => {
        console.log({event, question, answer})
    }

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
                            <QuestionAnswer answer={answer} question={currentQuestion}
                            handleAnswerQuestion={handleAnswerQuestion}
                            />
                        </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

