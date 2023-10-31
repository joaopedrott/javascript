//AULA 3 Formas de criacao de objetos literais com prototipos

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


//----------------------EXEMPLO--------------------------
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
//----------------------EXEMPLO--------------------------

//---------------------------------------------------
 