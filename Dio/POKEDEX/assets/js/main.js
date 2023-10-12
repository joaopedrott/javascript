
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
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

const pokemonList = window.document.getElementById('pokemonList')
//pokemonList.innerHTML +=`<li>Teste</li>`

// processamento assincrono
// fetch eh uma requisitcao HTTP usando url
// O padrao do fetch eh usar o GET para fazer requisicao
fetch(url)
    //metodo then eh oq ele vai fazer no sucesso de uma promise(promessa da resposta/resposta da requisicao) ou seja, na obtencao da resposta

    // converte a resposta em json para manipular os dados 
    .then((response) => response.json()) //BODY convertido em jason

    //dentro do json, pega o results que eh a array de pokemon
    .then((jsonbody) => jsonbody.results)

    //imprimi a array de pokemons
    .then((pokemons) => {
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

            
        }

    })

    .catch((error) => console.log(error)) // para manipular o fracasso da requisicao

// CADA THEN USA O RETORNO DO THEN ANTERIOR



/* .finally(function(){// para silinizar que a requisicao terminou
    console.log('Requisicao concluida!')
}) */


//obs: parecido com TRY CATCH

/* ANOTACOES
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