/*
* Nullish Coalescing (??) 
Eh um alternativo ao operador || (ou)
*/

const numUm= 0 // falsy -      false, 0, '', "",``, null, undefined, NaN
const numDois =20 // truthy -  true, 1, ' '," ",` `, [], {}

//|| (ou)
console.log(numUm || numDois)//20
// resultado eh 20 pois o OU (||) considera (ou converte) os valores 0, '', "",``, null, undefined, NaN. como false ou falsy. 

//Resumo do ||: no || se colocarmos um valor (falsy || truthy), teremos sempre o truthy



//Nullish Coalescing (??) 
console.log(numUm ?? numDois)//0
// com o operador Nullish Coalescing o 0 passa a ser considerado um numero

//Resumo do ??: nesse operador, apenas na situacao em que o valor do lado esquerdo for Null ou Undefined:(Null ?? 20) ou (Undefined ?? 20) sera executado o do lado direito. Como o valor do lado esquero foi diferente de null e undefined o resultado foi valor do lado esquerdo (0).






const numTres = true


console.log(numTres ?? numDois)

//RESUMO
/*
O Nullish Coalescing so ira retornar o valor da direita caso O VALOR da esquerda for Null ou Undefined

O Nullish Coalescing so ira retornar o valor da esquerda caso o valor da esquerda for 0 ou '',"", ``, ' '," ", ` `

*/


