//adicionando mais um tipo de funcao. Funcao de ordem superior

// 1. Função chamando outra (sem parâmetros)
/*
function outerFunction(innerFunction) {
    console.log("Esta é a função externa.");
    const result = innerFunction(); // chama a função interna
    console.log("Resultado da função interna: " + result);
    return "Retorno da função externa";
}

function innerFunction() {
    console.log("Esta é a função interna.");
    return "Retorno da função interna";
}

const resultado1 = outerFunction(innerFunction);
console.log("Resultado da função externa: " + resultado1);



// 2. Função chamando outra com parâmetros fixos
function outerFunction2(callback) {
    console.log("Esta é a função externa.");
    const result = callback(1, 2, 3); // passa valores para a interna
    console.log("Resultado da função interna: " + result);
    return "Retorno da função externa";
}

function innerFunction2(a, b, c) {
    console.log("Esta é a função interna.");
    return `Soma dos argumentos: ${a + b + c}`;
}

const resultado2 = outerFunction2(innerFunction2);
console.log("Resultado da função externa: " + resultado2);



// 3. Funções de operação matemática (bem comum)
function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}

function operacao(a, b, funcao) { // recebe a função como parâmetro
    return funcao(a, b);
}

console.log(operacao(10, 5, soma));
console.log(operacao(10, 5, subtracao));
console.log(operacao(10, 5, multiplicacao));
console.log(operacao(10, 5, divisao));



// 4. Função retornando outra função
function outerFunction3(callback) {
    console.log("Esta é a função externa.");
    return function(a, b, c) { // retorna uma nova função
        const result = callback(a, b, c);
        console.log("Resultado da função interna: " + result);
        return "Retorno da função externa";
    };
}

function innerFunction3(a, b, c) {
    console.log("Esta é a função interna.");
    return `Soma: ${a + b + c}`;
}

const outerWithArgs = outerFunction3(innerFunction3);
const resultado3 = outerWithArgs(1, 2, 3);
console.log("Resultado da função externa: " + resultado3);



// 5. Versão genérica com ...args
function outerFunction4(callback) {
    console.log("Esta é a função externa.");
    return function(...args) { // aceita qualquer número de parâmetros
        const result = callback(...args);
        console.log("Resultado da função interna: " + result);
        return "Retorno da função externa";
    };
}

function innerFunction4(...args) {
    console.log("Esta é a função interna.");
    return `Soma dos argumentos: ${args.reduce((acc, val) => acc + val, 0)}`;
}

const outerWithArgs2 = outerFunction4(innerFunction4);
const resultado4 = outerWithArgs2(1, 2, 3, 4, 5);
console.log("Resultado da função externa: " + resultado4);
*/

/*
//2666. Allow One Function Call
//resolvi a questao do desafio 10 do leetcode assim:

var once = function(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    }
};


 //* let fn = (a,b,c) => (a + b + c)
 //* let onceFn = once(fn)
 //*
 //* onceFn(1,2,3); // 6
 //* onceFn(2,3,6); // returns undefined without calling fn
 



*/