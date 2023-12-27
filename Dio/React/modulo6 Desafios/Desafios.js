/*'
1
 let line = gets().split(" ");
 let pimentoes_amarelos = parseInt(line[ 0  ]); 
let pimentoes_vermelhos = parseInt(line [  1 ]);  

function gets() {
    return "2 3"
}

function print(texto) {
    console.log(texto);
}
total =pimentoes_vermelhos+pimentoes_amarelos

console.log(`X = ${total}`);
 */

/* 
2
function findMaximumPieces(n) { 
    return 1 + n * (n + 1) / 2; 
} 

let valor = gets();

print(findMaximumPieces(parseInt(valor))); */

var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Complete o laço de repetição:
for (i=0;i <= array.length;i++){
//TODO: Agora crie uma condição que verifique o ARRAY e imprima APENAS os números pares.
if(array[i]%2===0){
  console.log(array[i])
}
}