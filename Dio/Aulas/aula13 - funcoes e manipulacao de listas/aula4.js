//Aula 4 invocacao direta, call, apply e operador New
//formas de como invocar uma funcao

const Pessoa = {
    nome: 'Renan',
    idade: 30
}


function gritar(prefixo){
    console.log(prefixo, this.nome)
}

//invocacao direta
//gritar()

//invocacao appy
gritar.apply(Pessoa, ['Olaaa'])
/* obs: essa invocacao com apply faz com que a funcao tenha o contexto do objeto pessoa, dentro do contexto pessoa com o parametro olaaa */

//invocacao call
gritar.call (Pessoa, 'Olaaaaa')
//mesma coisa so que, nao eh array e sao infinitos argumentos separados por virgula

//invocacao por new
//const Renan = new Pessoa();
//quando a gente faz a funcao construtora o operador NEW tambem invoca uma funcao, mas de forma diferenciada, que eh: passando um contexto pra funcao e retornando esse contexto pra gente( que eh um objeto)