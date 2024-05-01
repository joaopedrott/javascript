/*
Map()
Percorre uma lista gerando outra array com algum ou alguns dados da primeira array usada
*/


const pessoas = [
    {nome: 'Joao', idade: 31},
    {nome: 'Maria', idade: 21},
    {nome: 'Jose', idade: 41},
    {nome: 'Pedro', idade: 51},
    {nome: 'Paula', idade: 61}
]

// pode ser ate...const pessoaV2 = pessoas.map((pessoa,index,array)=>{})
const pessoaV2 = pessoas.map((pessoa)=>{
    return {
        nome: pessoa.nome
    }
})

console.log(pessoaV2)
//Resultado eh somente uma array com apenas o atributo nome de todas as pessoas