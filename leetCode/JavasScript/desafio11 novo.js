//2623. Memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}; // Objeto para armazenar os resultados em cache

    return function(...args) {
        const key = JSON.stringify(args); // Converte os argumentos em uma string JSON para criar uma chave única

        if (cache[key]) {//Verifica se o resultado já está no cache. Se estiver, retorna o valor em cache.
            return cache[key]; // Retorna o resultado em cache se já calculado
        }

        //se nao, ele calcula o resultado
        const result = fn(...args); // Calcula o resultado
        cache[key] = result; // Armazena o resultado no cache usando a chave única.

        return result; // Retorna o resultado calculado
    }
}

// Exemplo de uso:
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(5, 6)); // 11
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 2

/*
para melhor visualizacao do cache:
ex: console.log(memoizedFn(2, 3));

{
  "[2,3]": 5,
  "[5,6]": 11
}

*/

/*

Em um outro exemplo:
function slowFunction(x) { 
    return x * x; 
} 
    const memoizedSlowFunction = memoize(slowFunction); 
    console.log(memoizedSlowFunction(5)); // Calcula e armazena em cache 
    console.log(memoizedSlowFunction(5)); // Retorna do cache

    //ou seja
    Aqui está o que acontece:

1-Primeira Chamada: memoizedSlowFunction(5)

    *args é [5].

    *key será "["5"]".

    *Como cache[key] ainda não existe, a função slowFunction é chamada, resultando em 25.

    *cache[key] é definido como 25.

2-Segunda Chamada: memoizedSlowFunction(5)

    *args é novamente [5].

    *key é "["5"]".

    *Desta vez, cache[key] já existe e é 25, então esse valor é retornado sem recalcular.

        Portanto, a key para 5 é a string "[5]", e o valor associado a essa key no cache é 25.

*/