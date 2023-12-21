//ex1
 for(let i=1; i<10;i++){
    console.log("Valor", i)
}
 

console.log('======================')
let x =1;
while(x<=10) {
    console.log(`${x} x 5 = ${x*5}`);
    x++;
}

console.log('======================')
//usado mais com array ou lista
const valores =[1,2,3,4,5,6,7,8,9,10]

valores.forEach((value, index)=>{
    console.log(`${value} x 5 = ${value*5}`);
});
console.log('======================')


const valores2 =[1,2,3,4,5,6,7,8,9,10]

const resultado = valores2.map((value)=>{
    return value *5;
});

console.log(resultado);
