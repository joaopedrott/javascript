/*
Operadores logicos
&& || !


*/
// &&

 let x = 10
let y = 5

if (x>0 && y>0) {
    console.log('Os valores de x e y sao maiores que zero')
} else {
    console.log('Pelo menos uma condicao eh falsa')
} 

// ||

 let a = 0
let b =0

if(a>0 || b>0){
    console.log('Pelo menos um dos valores eh maior que zero')
} else {
    console.log('Ambas as condicoes sao falsas')
} 

// !

let souDesenvolvedor = false

if (!souDesenvolvedor) {
    console.log('Nao sou desenvolvedor')
} else {
    console.log('Sou desenvolvedor')
}