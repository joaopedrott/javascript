//Aula 5 join
//junta os elementos de uma lista e separa do jeito que eu quiser
/* 
const lista = [1,2,3]


console.log(lista.join('/'))
 */
//EX2----------------------------------------------------------------------


const lista = [{ nome: 'Renan' }, { nome: 'Andresa' }, { nome: 'Vitors' }, { nome: 'Amanda' }]


/* 
const teste = lista.map( (element) => {
    return element.nome
} ).join('; ')

console.log(teste) 
*/

// sintaxe diferente
//console.log(lista.map( (element) => element.nome ).join('; ') )

//converto uma lista de objeto de "{nome: 'Renan'}" para lista de String "Renan" e junto tudo com .join('; ')

console.log(

    
    lista
    .filter((element) => element.nome.startsWith('A'))//pega os objetos ou pessoas que comecam com letra A no nome e faz uma lista com essas pessoas ou objetos
    .map(element=>`<li>${element.nome}</li>`)//transforma na lista de objetos selecionados pelo filter e transforma em uma lista apenas com os nomes dentro de uma lista em html
    .join('')//junta tudo separados por nada
)