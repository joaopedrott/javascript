//Modificando objetos
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

//alterando valores 
pessoa.idade = 30
pessoa.empregado=false
console.log(pessoa)

//adicionando novos atributos para o objeto
pessoa.cidade ='Maceio'
console.log(pessoa)

//deletando os atributos
delete pessoa.cidade
delete pessoa.dizerOla
console.log(pessoa)