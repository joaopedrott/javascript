//2625. Flatten Deeply Nested Array

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result= [];

    function flattenRecursive(currentArr, depth) {


      for( element of currentArr ){
        if (Array.isArray(element) && depth < n ) {
          flattenRecursive(element, depth + 1);
        } else {
          result.push(element);
        }
      } 
    }

    flattenRecursive(arr, 0);
    return result;
};

console.log(flat([1,2,3],1))
