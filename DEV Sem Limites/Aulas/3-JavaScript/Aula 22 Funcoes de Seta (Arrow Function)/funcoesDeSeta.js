/*
Funcoes Anonimas


*/

const desejarBoasVindas = () => {
    console.log('Ola, seja bem vindo ao DSL Fundamentos!')
}

desejarBoasVindas()

const soma = (num1,num2) => {
    return num1+num2
}

console.log(soma(2,3))

const somaV2 = (num1,num2) => num1+num2


console.log(somaV2(2,7))

//obs: Devo ficar atento para funcoes de ordem superior