/*
Rest/Spread (...)
*/

//Rest
const [numUm, numDois, ...restantes] = [1,2,3,4,5]

//console.log(numUm, numDois, restantes)

const pessoaA = {
    nome: 'Maria',
    idade: 20,
    endereco: {
        rua: 'Rua ABC',
        numero: 1000
    }
}

const {nome, ...demaisInformacoes}= pessoaA

//console.log(nome, demaisInformacoes)
//OBS: o rest serve para pegar o resto das informacoes de uma array ou objeto

//spread
const listaA = [1,2,3]
const listaB = [4,5,6]

const listaC = [...listaA,...listaB]
//console.log(listaC)

//OBS: Spread serve para copiar toda uma array ou objeto e juntar eles

const dadosPessoais = {nome: 'Maria', idade: 20}
const endereco = {rua: 'Rua ABC', numero: 1000}

const pessoaB = {
    ...dadosPessoais, 
    endereco
}
console.log(pessoaB)