/*
* Templete Literals
eh o uso de `` e ${}
*/

const nome = 'Maria'
const sobrenome = "Silva"
//facilidade em fazer uma frase com variaveis sem usar concatenacao
const saudacao =`Ola, me chamo ${nome} ${sobrenome}`

console.log(saudacao)

const numero = 10

//fazendo contas
const resultado = `O resultado eh ${numero * 2}`

console.log(resultado)

//fazendo paragrafos
const paragrafo =`
Ola, meu nome e ${nome} ${sobrenome}!
Como voce se chama?

`

console.log(paragrafo)