//AULA 1 orientacao a prototipo, funcoes construtoras
//orientacao a prototipo semelhante a classes, semelhando ao polimorfismo e etc
//-------------Exemplo-------------------
//heranca entre objetos

/* const pessoa = {
    genero: 'masculino'
}

const renan = {//objeto renan herda de pessoa o genero
    nome: 'renan',
    idade:30,
    __proto__: pessoa//ligacao de heranca
}

console.log(renan.genero)
 */
//------------------------------------------------------------
//classes no fim sao funcoes construtoras no javascript
//exemplo de funcao construtora
//EX1
 // isso eh uma classe ou funcao construtora em javascript
/* function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade

} */

//adicionando metodo a "classe" Pessoa
//para adicionar vamos mudar o prototipo da Pessoa!
/*  Pessoa.prototype.falar= function(){//funcao anonima ou sem nome
    console.log(`Meu nome e: ${this.nome}`)
}   */

//---------------------------------------------------
//EX2
//Exemplo de como eh a criacao de uma classe normalmente
//AMBOS SAO EQUIVALENTES, FUNCAO CONSTRUTORA PESSOA OU CLASSE PESSOA
/* class Pessoa {
    constructor (nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    falar(){
        console.log(`Meu nome e: ${this.nome}`)
    }
} */

/* 
const renan = new Pessoa('renan', 30)
console.log(renan)
renan.falar() 
*/
//---------------------------------------------------
