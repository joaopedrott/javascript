//https://www.youtube.com/watch?v=ruoHSuTKp-U
//Destruturing com objeto

/* const pessoa = {
    nome: "Elton",
    age:26
}

const { age: idade } = pessoa

console.log(idade) */

//agora o mesmo exemplo mas usando uma variavel existente e atribuindo valor a ela
let idade;
const pessoa = {
    nome: "Elton",
    age:26
};//; por causa do hoisting para nao dar erro

({ age: idade } = pessoa)

console.log(idade)