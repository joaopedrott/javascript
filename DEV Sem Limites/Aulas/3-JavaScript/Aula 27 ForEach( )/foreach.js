/*
ForEach()
percorre uma lista
*/

const pessoas = [
    {nome: 'Joao', idade: 31},
    {nome: 'Maria', idade: 21},
    {nome: 'Jose', idade: 41},
    {nome: 'Pedro', idade: 51},
    {nome: 'Paula', idade: 61}
]
//OBS: o funcao foreach() recebe uma funcao como parametro que podem ter ate 3 parametros
//pode ser tambem: pessoas.forEach((pessoa,index,array)=>{
pessoas.forEach((pessoa,index)=>{
    console.log(pessoa,index)
})

