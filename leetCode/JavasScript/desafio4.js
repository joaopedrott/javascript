/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

//exercitando o conceito de funcao dentro de funcao, funcao como objeto
var createCounter = function(init) {
    let counter = init;

    return {
        increment: function (){
            return ++counter
        },
        reset: function (){
            counter = init
            return counter
        },
        decrement: function(){
            return --counter
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

 const counter = createCounter(5)
 console.log(counter.increment());
 console.log(counter.reset());
 console.log(counter.decrement());