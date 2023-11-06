//Aula 3 Map
//mapeia uma lista ou converte um objeto em outro objeto
/* class Pessoa {
    constructor(name){
        this.name=name
    }
} */

function Pessoa(name){
    this.name=name
}
const lista = [new Pessoa('Renan'),new Pessoa('Andresa'),new Pessoa('Vitor'),new Pessoa('Jose')]

//usando o map converto uma lista de objetos em uma lista de nomes ou lista de string
/* const listaNomes = lista.map((element)=>{
    return element.name
    //return `${i}-${element.name}`
}) */

//obs uma caracteristica da arrow function que a funcao nao precisa de corpo se for em apenas uma linha
/* 
const listaNomes = lista.map((element)=>element.name)
 */

/* console.log(listaNomes) */
//console.log(typeof(listaNomes[0]))

//--------------------------------------------------------------------
//Lista em HTML
//transforma uma lista de objetos em uma lista de html com a string de cada nome de cada pessoa/objeto
const listaEmHtml = lista.map((element)=>{
    return `
    <li>
    ${element.name}
    </li>
    `
})

console.log(listaEmHtml)