//Aula 2 Filter
//Filtra elementos de uma lista


const lista = [1,2,3,4,5,6,7,8,9,10]
const listaDeNumerosPares=lista.filter((element)=>{
    return (element%2==0)
})
console.log(typeof(lista))
console.log(listaDeNumerosPares)
//Filter cria uma outra lista baseada na lista anterior filtrando com a verificacao de boolean, neste caso se o resto da divisao por 2 for 0 vai dar verdadeiro e sera inserido na listaDeNumerosPares