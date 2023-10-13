
function convertPokemonToLi(pokemon) {//inseri o pokemon nessa html
    return `
    <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">  

                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}"></div>
        </li>`
}

//1-faz ligacao do html no javascript
const pokemonList = window.document.getElementById('pokemonList')


//2-chama a funcao getPokemons do objeto pokeApi do arquivo poke-api.js para fazer a requisicao 
    pokeApi.getPokemons()

//3-o retorno foi uma array de 10 pokemons e eh colocado em pokemons
    .then((pokemons=[]) => {

//4-a funcao map transforma cada item de uma lista em outro tipo de item ou seja, converte os itens em outros itens
//nesse caso transformo cada pokemon em um html com pokemon inserido nesse html com convertPokemonToLi, ou seja, transforma pokemon em html
// No fim, o newList eh uma lista de html com pokemons inseridos
        const newList = pokemons.map(function (pokemon){
            return convertPokemonToLi(pokemon)
        })

//5-o join vai juntar todos os elementos da lista e converte a lista em uma string
        const newHtml = newList.join('')

//6-e assim, a string de html de pokemons eh inserida no html
        pokemonList.innerHTML += newHtml

    })

// simplificando
//simplificando o passo 4 com errow function em uma linha
//const newList = pokemons.map((pokemon)=>convertPokemonToLi(pokemon))

//simplificando o passo 4 com errow function em uma linha usando o convertPokemonToLi dentro do pareteses
//const newList = pokemons.map(convertPokemonToLi)

//simplificando o passo 4 com o 5
//const newList = pokemons.map(convertPokemonToLi).join('')

//simplificando o passo 4 com o 5 com o 6
//pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

// CADA THEN USA O RETORNO DO THEN ANTERIOR



/* .finally(function(){// para silinizar que a requisicao terminou
    console.log('Requisicao concluida!')
}) */


//obs: parecido com TRY CATCH

/* ANOTACOES simplificando o .then
primeiro then normal
1-
.then(function (response) {
    
    return response.json() // converte a resposta em json para manipular os dados
    //console.log(response)
})

2-usando arrow function retirando palavra function e cologando a => seta
.then((response)=> {
    
    return response.json() // converte a resposta em json para manipular os dados
    //console.log(response)
})

3- simplificando ainda mais retirando {} e return
.then((response)=>response.json())
*/