//2635. Apply Transform Over Each Element in Array
// algoritmo para adicionar 1 a cada valor da array

// lembrar que para adicionar valores em uma array é necessario usar o push
var map = function(arr, fn) {
    
        const resultado = arr.reduce((novaArray, valorAtual,index)=>{
            novaArray.push(fn(valorAtual,index))

            return novaArray
        },[])

    return resultado
};

 const arr= [1,2,3]

function plusone(n) { 
    return n + 1; 
}
 
 
console.log(map(arr,plusone))

/*
retornar uma nova array com mais 1 em cada numero da array passada como parametro

*/

/*
ou assim

var map = function(arr, fn) {
    let resultado = [];
    
        arr.forEach((num,index)=>{
            resultado.push(fn(num,index))
        })

    return resultado;
};

*/