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

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */