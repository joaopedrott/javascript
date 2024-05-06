/*
* Nullish Coalescing (??) 
Eh um alternativo ao operador || (ou)
*/

const numUm= 0 // falsy - false, 0, '', "",``, null, undefined, NaN
const numDois =20 // truthy - true, 1, ' '," ",` `, [], {}

console.log(numUm || numDois)//20
// resultado eh 20 pois o OU (||) considera (ou converte) os valores 0, '', "",``, null, undefined, NaN. como false. Assim chamamos de falsy

console.log(numUm ?? numDois)//0
// com o operador Nullish Coalescing o 0 passa a ser considerado um numero

const numTres = NaN

console.log(numTres ?? numDois)

//RESUMO
/*
O Nullish Coalescing so ira retornar o valor da direita caso for null ou undefined ou NaN

O Nullish Coalescing so ira retornar o valor da esquerda caso for 0 ou '',"", ``, ' '," ", ` `

*/

