/*
findIndex()

Esse metodo recebe um callback e ele vai encontra o indice do primeiro elemento que satisfazer a condicional desse callback


*/

const alunos = [
    {nome: 'Joao', nota: 7.3},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Pedro', nota: 9.8},
    {nome: 'Ana', nota: 5}
]
//para encontra o indice do primeiro elemento/aluno com nota maior ou igual a 9
const index= alunos.findIndex(aluno =>aluno.nota >=9)
console.log(index)

