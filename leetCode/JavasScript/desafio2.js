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