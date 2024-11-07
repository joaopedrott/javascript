//adicionando mais um tipo de funcao. Funcao de ordem superior

//funcoes interna e externa -------------------------------------------------------------------------------


/* function outerFunction(innerFunction) {//funcao externa
    //innerFunction ou callback
    console.log("Esta é a função externa.");

    const result = innerFunction(); // Chamando a função passada como parâmetro e capturando o retorno

    console.log("Resultado da função interna: " + result);
    return "Retorno da função externa";
}


function innerFunction() {//funcao interna
    console.log("Esta é a função interna.");
    return "Retorno da função interna";
}




const resultado = outerFunction(innerFunction); // Passando innerFunction como argumento para outerFunction


console.log("Resultado da função externa: " + resultado); */
//-----------------------------------------------------------------------------------------------------
//funcao dentro de funcao. Sem funcao de ordem superior

/* function outerFunction(callback) {
    console.log("Esta é a função externa.");
    const result = callback(1, 2, 3); // Passando argumentos para a função interna
    console.log("Resultado da função interna: " + result);
    return "Retorno da função externa";
}

function innerFunction(a, b, c) {
    console.log("Esta é a função interna.");
    return `Soma dos argumentos: ${a + b + c}`;
}

const outerResult = outerFunction(innerFunction); // Passando innerFunction como argumento para outerFunction
console.log("Resultado da função externa: " + outerResult);
 */



//-----------------------------------------------------------------------------------------------------

//Agora a funcao passando parametros ou funcao de ordem superior
//exemplo 1 funcao de ordem superior
/* function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
function operacao(a, b, funcao) {
    return funcao(a, b);
}
console.log(operacao(10, 5, soma));
console.log(operacao(10, 5, subtracao));
console.log(operacao(10, 5, multiplicacao));
console.log(operacao(10, 5, divisao)); */

//exemplo 2 funcao de ordem superior
/* function outerFunction(callback) {//funcao externa
    console.log("Esta é a função externa.");
    return function(a, b, c) {
        const result = callback(a, b, c); // Passando argumentos para a função interna
        console.log("Resultado da função interna: " + result);
        return "Retorno da função externa";
    };
}

function innerFunction(a, b, c) {//funcao interna
    console.log("Esta é a função interna.");
    return `Soma dos argumentos: ${a + b + c}`;
}

const outerWithArgs = outerFunction(innerFunction); // Obtendo a função retornada
const outerResult = outerWithArgs(1, 2, 3); // Passando argumentos para a função retornada
console.log("Resultado da função externa: " + outerResult);
//explicacao
//Neste exemplo, outerFunction chama innerFunction e passa os argumentos 1, 2, 3. A innerFunction recebe esses valores como parâmetros a, b, c e retorna a soma deles. O resultado é então capturado e exibido pela outerFunction. */

//exemplo 3 funcao de ordem superior usando args

function outerFunction(callback) {
    console.log("Esta é a função externa.");
    return function(...args) {
        const result = callback(...args); // Passando todos os argumentos para a função interna
        console.log("Resultado da função interna: " + result);
        return "Retorno da função externa";
    };
}

function innerFunction(...args) {
    console.log("Esta é a função interna.");
    return `Soma dos argumentos: ${args.reduce((acc, valorAtual) => acc + valorAtual, 0)}`;
}

const outerWithArgs = outerFunction(innerFunction); // Obtendo a função retornada
const outerResult = outerWithArgs(1, 2, 3); // Passando argumentos para a função retornada
console.log("Resultado da função externa: " + outerResult);
