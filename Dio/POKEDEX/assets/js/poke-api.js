

const pokeApi = {} //objeto criado

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
        .catch((error) => console.log(error)) 

    }




