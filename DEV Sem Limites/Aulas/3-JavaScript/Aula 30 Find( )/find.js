/*
find()

o find retorna sempre o primeiro que atender a condicao, e somente este primeiro elemente que ele achar
*/


const pessoas = [
    {nome: 'Joao', idade: 2},
    {nome: 'Maria', idade: 18},
    {nome: 'Jose', idade: 10},
    {nome: 'Pedro', idade: 22},
    {nome: 'Paula', idade: 4}
]

// find pode receber ate 3 parametros: ex pessoa,index,array
const pessoa = pessoas.find(pessoa => pessoa.nome === 'Jose')

console.log(pessoa)