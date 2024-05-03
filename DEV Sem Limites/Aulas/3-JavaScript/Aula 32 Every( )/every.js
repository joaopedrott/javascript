/*
every()

Esse metodo every() eh muito util quando pretendemos testar se todos os elementos da lista atendem a uma determinada condicao. Se todos atenderem o retorno sera TRUE se caso um ou mais nao atenderem o retorno sera FALSE


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
const todosAlunosAprovados= alunos.every(aluno =>aluno.nota>=7)
console.log(todosAlunosAprovados)

