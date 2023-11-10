//aula 1 introducao a manipulacao de listas
//Foreach
//obs: eh uma funcao para percorrer uma lista, melhor que usar o for

 //ex
const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value, i, listRef)=>{
    console.log(value, i, listRef)
    //console.log(value+i)
    //console.log(lista[i])
})
//elemento, indice e toda a lista
 

//ou
/* 
const cb = (value, i, listRef)=> {
    console.log(value, i, listRef)
    //console.log(value+i)
}

lista.forEach(cb) 
*/

//so para percorrer a lista
/* 
lista.forEach((value)=>{
    console.log(value)
    //console.log(value+i)
}) 
*/