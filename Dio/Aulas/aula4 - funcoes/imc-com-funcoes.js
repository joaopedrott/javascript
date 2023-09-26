
function calcularImc(peso, altura){

    return peso / Math.pow(altura,2)// 1-valor do imc por exemplo: 22
}

function classificarImc(imc){ // 3-joga o 22 aqui
    if (imc< 18.5) {
        return`Abaixo do peso`
    } else if(imc>=18.5 && imc <25){
        return`peso normal`
    } else if(imc>=25 && imc<30){
        return`Acima do peso`
    } else if(imc>=30 && imc <40) {
        return`Obeso`
    } else {
        return`Obesidade grave`
    }
}


function main(){
    const imc = calcularImc(82,1.78) // 2-joga o valor 22 na const imc
    console.log(classificarImc(imc)) // 4- pega 'Peso normal' derivado do  22 e joga no console
}

main();