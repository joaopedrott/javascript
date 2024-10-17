/*

1. Reduzir um array a uma única variável (soma de valores)

    const numeros = [1, 2, 3, 4, 5];
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    console.log(soma); // Saída: 15

  2. Reduzir um array a outro array (duplicar valores)

    const numeros = [1, 2, 3, 4, 5];
    const duplicados = numeros.reduce((acumulador, valorAtual) => {
      acumulador.push(valorAtual * 2);
      return acumulador;
    }, []);
    console.log(duplicados); // Saída: [2, 4, 6, 8, 10]


*/


/* 
//1. Reduzir um array a uma única variável (soma de valores)
const numeros = [1, 2, 3, 4, 5];
    const soma = numeros.reduce((acumulador, valorAtual) => {
        acumulador + valorAtual, 0
    });

    console.log(soma); // Saída: 15 */


    //2. Reduzir um array a outro array (duplicar valores)
    const numeros = [1, 2, 3, 4, 5];
    
    const dobroPar = numeros.reduce((acumulador, valorAtual) => {
        if(valorAtual%2===0){
            acumulador.push(valorAtual * 2);
        }
      return acumulador;
    }, []);


    console.log(dobroPar); // Saída: [4, 8]

    //ou seja, tem duas formas de usar o reduce mas acredito que sao raras as chances de usar ele pois o mais usado seria o map