/*
Funcoes Anonimas


*/

//exercicio 1


function parImpar(num){
    if(num%2==0){
        return true //par
    }else {
        return false //impar
    }
}

console.log(parImpar(1097))

 
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
    return palavra2.toUpperCase()
}

console.log(palavra('joao'))

 

//exercicio 4




const primo = (num) => {
    if(num <= 1) {
        return false //numero menor ou igual a 1 nao sao primos
    }

    for (let index = 2; index < num; index++) {
        if(num % index === 0){
            // encontrou mais um divisor alem do 1 e pelo proprio numero digitado. Nao eh primo
            return false 
        }
    }

    return true;
}
let num = 72;

if(primo(num)) {
    console.log('numero eh primo')

} else {
    console.log('Numero nao eh primo')
}

 
//desafio 1


const fatorial = (num) => {
 let fixo = 1

 for (let i = 2; i <= num; i++) {
    fixo *= i
 }
 return fixo
}

console.log(fatorial(7))
 
//desafio 2

function palindromo(palavra) {
    const tamanhoDaPalavra = palavra.length;
    for (let i = 0; i < tamanhoDaPalavra / 2; i++) {
        if (palavra.charAt(i) !== palavra.charAt(tamanhoDaPalavra - 1 - i)) {
            return false;
        }
    }
    return true;
}


// Exemplo de uso:
const palavraExemplo = "joao";
if (palindromo(palavraExemplo)) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra NÃO é um palíndromo.");
}