/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}; // Objeto para armazenar os resultados em cache

    return function(...args) {
        const key = JSON.stringify(args); // Cria uma string única dos argumentos

        if (cache[key]) {
            return cache[key]; // Retorna o resultado em cache se já calculado
        }

        const result = fn(...args); // Calcula o resultado
        cache[key] = result; // Armazena o resultado no cache

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