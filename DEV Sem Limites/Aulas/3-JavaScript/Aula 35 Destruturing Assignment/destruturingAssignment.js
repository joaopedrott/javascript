/*
Desestruturacao (Destruturing Assignment)



*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//normal
/* const nome = pessoa.nome
console.log(nome) */

//desestruturacao de objeto
const { nome: nomeDaPessoa, idade, endereco: {logradouro} } = pessoa
console.log(nomeDaPessoa, idade, logradouro )

//obs: podemos renomear o atributo com :novoNome

//EX 2 Desestruturacao com array

const idades= [12,15,18,20,25]

//neste exemplo fizemos a desestruturacao pegando somente o primeiro e o terceiro valor
const [idadeUm, ,idadeTres] = idades
//obs devemos sempre fazer na sequencia baseada na lista

console.log(idadeUm, idadeTres)