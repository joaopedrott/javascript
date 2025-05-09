/*
some()

Esse metodo some() eh muito util quando pretendemos testar se Algum dos elementos da lista (array) passam em uma condicional


*/

const alunos = [
    {nome: 'Joao', nota: 7.3},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Pedro', nota: 9.8},
    {nome: 'Ana', nota: 5}
]
//1 parametro elemento atual
//2 parametro vai ser o indice
//3 parametro vai ser a array
// 
const todosAlunosAprovados= alunos.some(aluno =>aluno.nota <7)
console.log(todosAlunosAprovados)

