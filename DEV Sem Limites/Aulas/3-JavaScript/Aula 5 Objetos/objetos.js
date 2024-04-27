//Objetos sao colecoes de pares chave-valor
let pessoa={
    nome: 'joao',
    idade: 29,
    profissao: 'Desenvolvedor front end',
    empregado: true,
    dizerOla: function (){
        console.log('Ola')
    }
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.empregado)
pessoa.dizerOla()