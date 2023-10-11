
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url).then(function (response){//metodo then processa o sucesso de uma promise(promessa de resposta da requisicao)
    console.log(response)
}) // processamento assincrono

const x = 10+10
console.log(x)
