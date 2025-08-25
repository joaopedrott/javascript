//2723. Add Two Promises
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};


/*
Explicação do codigo--> const [value1, value2] = await Promise.all([promise1, promise2]);

Neste ponto, usamos Promise.all para aguardar a resolução de ambas as promessas. 
Promise.all retorna uma nova promessa que se resolve quando todas as promessas fornecidas são resolvidas. 
O await faz com que a função pause até que Promise.all resolva e retorne um array com os valores resolvidos das promessas, 
que são então atribuídos a value1 e value2

*/

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */