//Aula 2 Declaracao explicita e arrow functions

//1 forma literal
//ex
function funcao1(){//funcao normal
    console.log(this)
}

const funcao2 = ()=>{//arrow function
    console.log(this)
}
//obs: para fazer arrow function basta tirar o nome function e por a seta depois do parenteses
//mais detalhes de arrow function em: https://www.youtube.com/watch?v=maiNY1zYKSQ

const renan = {
    nome: 'Renan',
    funcao1,
    funcao2
}

renan.funcao1()//mostra todo o objeto pois a function tem o this e tem contexto
renan.funcao2()//vazio pq a arrow function nao tem o this ou contexto
//Objeto e funcao

//Quando uma funcao esta dentro de um objeto, a funcao assume o contexto do objeto e o this passa a ser o objeto