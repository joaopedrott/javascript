import S from './styles.module.css'
//componente botao
export function QuestionAnswer (props) {//props eh como se fosse um pacote com todos os parametros passados
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