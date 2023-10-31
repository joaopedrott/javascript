//AULA 4 entendendo New e brincando com prototipos
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
/* const renan = {
    nome: 'Renan'
} */

//em prototipo de objeto usamos.__proto__ para incrementar funcao ou variaveis no objeto
/* renan.__proto__ = {
    idade: 30
} */
//ja na funcao construtora usamos o prototype

/* console.log(renan.idade) */
//---------------------------------------------------