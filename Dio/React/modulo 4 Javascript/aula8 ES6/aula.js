//array

const alunos = [
    {
        nome: 'Pablo',
        idade: 25
    },
    {
        nome: 'Jose',
        idade: 19
    },
    {
        nome: 'Roberto',
        idade: 9
    },

];
//para filtro
const alunosFiltrados = alunos.filter(aluno=> aluno.idade>=18)

console.log(alunosFiltrados)

//para achar um objeto especifico
const alunoRoberto = alunos.find(aluno => aluno.nome=='Roberto')

console.log(alunoRoberto);

//para pegar a posicao de um objeto da array
const alunoRobertoi = alunos.findIndex(aluno => aluno.nome=='Roberto')
console.log(alunoRobertoi);

//para fazer um calculo com uma informacao da array(REDUZ tudo a um valor)
//neste caso somei todas as idades de cada aluno da array
const idades = alunos.reduce((acc, aluno)=>{
    return acc + aluno.idade
},0);

console.log(idades)

//Some - para validacao
//Se caso tiver pelo menos UM aluno menor de 10 anos, vai retornar TRUE
const acimaDeNove = alunos.some(alunos => alunos.idade<10);

console.log(acimaDeNove);

//every - para validacao
//retorna TRUE se TODOS os alunos tiverem idade menor que 90
const menorQueNoventa = alunos.every(alunos => alunos.idade<90);

console.log(menorQueNoventa);