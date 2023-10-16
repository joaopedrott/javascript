

const pokeApi = {} //objeto criado

    pokeApi.getPokemonDetail = (pokemon) => {
        return fetch(pokemon.url)
            .then((response)=>response.json())
    }

    pokeApi.getPokemons = (offset=0, limit=10)=> { //adicionando metodo/funcao no objeto

        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        // processamento assincrono
        // fetch eh uma requisitcao HTTP usando url
        // O padrao do fetch eh usar o GET para fazer requisicao
        return fetch(url)

        //metodo then eh oq ele vai fazer no sucesso de uma promise(promessa da resposta/resposta da requisicao) ou seja, na obtencao da resposta
        
        // converte a resposta em json para manipular os dados 
        .then((response) => response.json()) //BODY convertido em jason

        //dentro do json, pega o results que eh a array de pokemon ou seja, pega os pokemons
        .then((jsonbody) => jsonbody.results)
        
        
        // para manipular o fracasso da requisicao
        //.catch((error) => console.log(error)) 

        //com os pokemons, eu pego cada um e percorro essa array de pokemons usando map, e a cada pokemon nessa array eu uso um FETCH/requisicao com a URL de cada pokemon, o retorno eh uma array de resultados das requisicoes do FETCH de cada pokemon e em seguida converto em json, fazendo uma array de detalhes de todos os pokemons listados no jsonbody.results em json
        .then((pokemons)=>pokemons.map(pokeApi.getPokemonDetail))

        //espera todas as requisicoes de todos os pokemons terminarem
        .then((detailRequests)=> Promise.all(detailRequests))


        .then((pokemonsDetails)=> {
            return pokemonsDetails})


    }

    


