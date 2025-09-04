//2724. Sort By

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * 
 * Ficar atento neste caso pois a funcao sort() sozinha nao consegue ordenar pois ela so ordena numeros, entao precisamos
 * "ensinar" a funcao sort() como ela deve ser ordenada implementando a funcao fn dentro dela
 */
var sortBy = function(arr, fn) {
    let ar=arr.sort((a,b)=>{

        return fn(a) - fn(b)
    })
    return ar
    
};

console.log(sortBy([3,1,5,6],fn = (x) => x))
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}],fn = (d) => d.x))
console.log(sortBy([[3, 4], [5, 2], [10, 1]],fn = (x) => x[1]))