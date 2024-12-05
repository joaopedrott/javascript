
//obs devo lembrar que o filter retorna uma array com valores +1 que passam no teste --> if

var filter = function(arr, fn ) {
    let array = [];

    arr.forEach((n,index)=>{
        if(fn(n,index)){//esse teste é o nullish coalescing
            array.push(n)
        }
    })

    return array;
};



const arr = [10,20];
const plusOne = (n) => n + 1;

const novosNumeros = filter(arr, plusOne);

console.log(novosNumeros); 
