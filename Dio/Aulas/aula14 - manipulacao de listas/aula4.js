//Aula 4 Reduce
//Reduce
//Para reduzir a lista em um unico valor ou elemento

const lista = [1,2,3,4,5,6,7,8,9,10]
// para somar todos os numeros da lista

const somaDeTodosOsNumeros = lista.reduce((previous, current)=>{
    console.log(previous,current)
    return previous+current
})

console.log(somaDeTodosOsNumeros)

//obs: caso a lista esteja vazia e precise iniciar/iniciador
/*
const somaDeTodosOsNumeros = lista.reduce((previous, current)=>{
    console.log(previous,current)
    return previous+current
},0)
*/
//coloca ,0 no final para iniciar

//Recude ideal para operacoes matematica, conversoes de elementos e etc