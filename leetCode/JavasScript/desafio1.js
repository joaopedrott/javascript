/**
 * 
 */
//nota - ...args quer dizer todo e qualquer tipo de dado passado para a função
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

const f = createHelloWorld();
console.log(f());