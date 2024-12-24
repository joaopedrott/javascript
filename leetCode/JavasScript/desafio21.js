//2677. Chunk Array

var chunk = function(arr, size) {

    let result = []
    if(size==0) {
        return result
    } else{
        for(let i=0; i<arr.length; i+=size) {
            result.push(arr.slice(i, i+size))
        }
        return result
    }
    
};

//esse algoritmo pega uma array e divide ela em pedaços de acordo com o tamanho que o usuário definir com Size e coloca cada pedaço em um array dentro de outro array