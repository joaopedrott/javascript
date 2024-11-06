
//obs devo lembrar que o filter retorna uma array com valores +1 que passam no teste --> if
//esse teste é o nullish coalescing
var filter = function(arr, fn ) {
    let array = [];

    arr.forEach((n,index)=>{
        if(fn(n,index)){
            array.push(n)
        }
    })

    return array;
};



const arr = [-2, -1, 0, 1, 2];
const plusOne = (n) => n + 1;

const novosNumeros = filter(arr, plusOne);

console.log(novosNumeros); 
