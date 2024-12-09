//2629. Function Composition

var compose = function(functions) {
    return function(x) {
        let result
        if(functions.length){
            
            //return functions[0](functions[1]((functions[2](x)))) //resposta mais curta
            let invertida = functions.slice().reverse()
            invertida.forEach(funcao =>{
                result = funcao(x)
                x=result
            })
            return x
            
        } else {
            return x
        }
    }
};

//.slice() faz uma copia do array
//.reverse() inverte o array
//dentro do forEach() cada funcao é executada recebendo o valor de x
//o valor de x é atualizado com o resultado da funcao (result)
// o valor de x é retornado, esse valor é o retorno de todas a funcoes usando o valor de x para calcular o resultado


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */