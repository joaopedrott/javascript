//1) Crie um programa que dado um numero imprima a sua tabuada


function tabuada(numero){
    for (let index = 1; index <=10; index++) {
        const multiplicacao = numero * index;
        console.log(`${numero} x ${index} = ${multiplicacao}`)
        
    }
}
(function(){
    tabuada(2)
})();