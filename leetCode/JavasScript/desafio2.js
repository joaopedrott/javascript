//2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
//passagem de parametro para função interna
var createCounter = function(n) {
    
    return function(...args) {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

 const counter = createCounter(10)
 console.log(counter())
console.log(counter())
//Essa é uma função de ordem superior. Funções de ordem superior são aquelas que retornam outras funções ou recebem funções como argumento. No seu exemplo, a função createCounter retorna uma nova função que incrementa a variável n toda vez que é chamada. Esta abordagem permite criar contadores independentes com diferentes valores iniciais.