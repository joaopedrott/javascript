/*
Funcoes Anonimas


*/

//exercicio 1

/* 
function parImpar(num){
    if(num%2==0){
        return true //par
    }else {
        return false //impar
    }
}

console.log(parImpar(1097))

 */
//exercicio 2

const lista = [2,3,4,5,6]


const calc = function (lista) {
    let num=0;
    let lTamanho=0;
    for (const numero of lista) {
        num += numero;
    }

    lTamanho = lista.length;
    return num/lTamanho;

}

console.log(calc(lista))
//exercicio 3


const palavra = (palavra2)=>{
    return palavra2.toUpperCase();
}

console.log(palavra('joao'))

//exercicio 4


//desafio 1

//desafio 2
