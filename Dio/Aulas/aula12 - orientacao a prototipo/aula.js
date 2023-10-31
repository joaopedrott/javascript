//orientacao a prototipo, funcoes construtoras
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
//sobrescrita de um atributo ou metodo
/* const pessoa = {
    idade:18
}
//primeiro o codigo procura idade dentro do primeiro objeto, nesse caso objeto renan
const renan = {
    nome: 'renan',
    idade:30,
    __proto__: pessoa
}
//se nao achar ele vai para o outro objeto, o objeto pessoa para procurar
console.log(renan.idade) */
//---------------------------------------------------
//ate agora foi criado objeto literal

//1-fazendo objeto literal com prototipo
/* const pessoa = {
    genero: 'masculino'
} */
//obs: nao tem proto dentro do objeto

//2-cria um objeto chamado renan e liga ele ao objeto pessoa
/* const renan = Object.create(pessoa) */

//3-para incrementar se cria uma chave e valor assim
/* renan.nome = 'Renan'

//4-por fim imprimi na tela
console.log(renan) */

/*Em resumo criamos um objeto renan usando Object.create 
isso eh semelhante a funcao construtora da classe usando o NEW usando como base o objeto pessoa*/

//na funcao construtora usamos o prototype ja nesse objeto com prototipo usamos o proto, 
//---------------------------------------------------
 //entendendo New e brincando com prototipos
//ex1 
//1- criamos funcao construtora

/* function Pessoa(nome, idade){
    this.nome= nome,
    this.idade = idade
} */

//2-incrementamos a funcao construtora/ ou classe Pessoa com o 
//prototype com funcao falar

/* Pessoa.prototype.falar= function(){
    console.log(`Meu nome eh: ${this.nome}`)
} */

/*
// 3- criamos o objeto renan baseado na classe/funcao construtora Pessoa 

const renan = new Pessoa('renan', 30) 
renan.falar() // obs: o prototype que foi usado para incrementar a classe pessoa so serve para objeto
console.log(renan)  */


 //2.2-criei um objeto

/*  const renan = {
    genero: 'masculino',
    
}  */

//3.3em vez de usar new pessoa vamos usar o call

/*  Pessoa.call(renan, 'nome',30)
console.log(renan)  */

//renan.falar() //erro
// usando call temos a desvantagem de nao poder usar o prototype
// usando o call ele usa o objeto renan como base para incrementar na classe Pessoa

//---------------------------------------------------
/* Praticamente tudo no javascript eh um objeto e entao podemos modificar o prototipo deles, modificar prototipos de objetos basicos do javascript
como por exemplo String */
//ex
/* String.prototype.toPLang= function(){
    return `P ${this}`
}

console.log(`teste`.toPLang()) */

/* 
prototipos sao mecanismos pelo qual objetos javascript herdam recursos uns dos outros 
*/
//---------------------------------------------------
//diferenca entre objeto funcoes construtoras
const renan = {
    nome: 'Renan'
}

//em prototipo de objeto usamos.__proto__ para incrementar funcao ou variaveis no objeto
renan.__proto__ = {
    idade: 30
}
//ja na funcao construtora usamos o prototype

console.log(renan.idade)