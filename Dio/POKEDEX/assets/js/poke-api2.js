const htmlpokemon = window.document.getElementById('detailpokemon')
const pokeApi2 = {}

function convertPokeApiDetailToPokemon(pokeDetail){ //FUNCAO convertendo modelo da api de pokemons no nosso modelo
    const pokemon = new Pokemon();// chamo a classe Pokemon criado no arquivo pokemon-model.js, para usar como modelo
    pokemon.number = pokeDetail.id//linkado numero do pokemon. a partir de agora comeco a linkar o nosso pokemon modelo a api para facilitar inserir o pokemon no html
    pokemon.name=pokeDetail.name // linkado nome do pokemon

    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name)//converto a array/matris do pokeApi em uma array mais simples, types
    const [type] = types // pega o primeiro valor da array types, que nesse caso eh o primeiro tipo do pokemon, que vai ser o tipo principal
    
    pokemon.types = types // linkado array dos tipos
    pokemon.type = type // linkado  tipo principal do pokemon

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default // linkado foto do pokemon

    return pokemon;//retorna o pokemon com, nome,numero,tipos, tipo principal e foto do pokemon
}

 function convertPokemonToLi2(pokemon) {//inseri o pokemon nessa html

    return `
        <div class="pokemonDetail ${pokemon.type}">
        <span class="name">${pokemon.name}</span>
        <span class="number">#${pokemon.number}</span>
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                
            </ol>
            <img src="${pokemon.photo}" alt="Bulbasaur">
        </div>
        <div class="detail">
            <Span><strong>About</strong></Span>
            
                    <div>
                        <span class="info">Species: </span>
                        <span class="infResp">Seed</span>
                    </div>
                
                    <div>
                        <span class="info">Height: </span>
                        <span class="infResp">0.70 cm</span>
                    </div>
                
                    <div>
                        <span class="info">wight: </span>
                        <span class="infResp">6.9 kg</span>
                    </div>
                
                    <div>
                        <span class="info">Abilities: </span>
                        <span class="infResp">Overgrow, Chlorophyl</span>
                    </div>
                
            <Span><strong>Breending</strong></Span>
            
                    <div>
                        <span class="info">Gender: </span>
                        <span class="infResp">Male</span>
                        <span>87,5%</span>
                        <span class="infResp">Famale</span>
                        <span>12,5%</span>
                    </div>
                
                    <div>
                        <span class="info">Egg Groups: </span>
                        <span class="infResp">Monster</span>
                    </div>
                
                    <div>
                        <span class="info">Egg Cycle</span>
                        <span class="infResp">Grass</span>
                    </div>
                
            
        </div>
        `
} 

pokeApi2.GetDetail = (idPokemon=140) => {
     //console.log(idPokemon)

     fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
    .then((response) => response.json())
    .then((detalhe)=>convertPokeApiDetailToPokemon(detalhe))
    /* .then((detalhe)=>{
        console.log(detalhe.types)
    })  */ 
    .then((detalhe)=>{
        //const pokemon00 = convertPokeApiDetailToPokemon(detalhe)
        const pokemon1 = convertPokemonToLi2(detalhe)
        //const newHtml = pokemon1.join('')
        htmlpokemon.innerHTML = pokemon1
    })

    /*  .then((response)=>{
        console.log(pokemon.name)
    })  */
    //.then((pokemon) =>pokeApi2.convertPokeApiDetailToPokemon)
     /* .then((pokemon)=>{
        const pokemon00 = pokeApi2.convertPokeApiDetailToPokemon
        const pokemon1 = convertPokemonToLi2(pokemon00)
        //const newHtml = pokemon1.join('')
        htmlpokemon.innerHTML += pokemon1
    })  */  

    console.log('sucesso!'+idPokemon)
    
}

pokeApi2.GetDetail();