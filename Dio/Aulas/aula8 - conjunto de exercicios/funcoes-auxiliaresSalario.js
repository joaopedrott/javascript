const {print, gets } = require("./desafio-salario");
const valorSalario = gets();
const valorBeneficio= gets();

function percentualComBaseNoSalario(salario){//Com base no salario eh retornado uma porcentagem diferente 5,10,15
    if(salario>0 && salario<=1100){
        return 5 //5.00% de desconto
    } else if(salario>1100 && salario<=2500){
        return 10 //10.00% de desconto
    }else if(salario>2500){
        return 15 //15.00% de desconto
    }else{
        print(`Salario invalido!`)
    }
}


function calcularDesconto(percentual,valor){//EX:5% de 2000=...
    //let desconto=beneficioSalario+(valor-(valor*percentual));
    const desconto = valor*(percentual/100);
    return desconto; //retorna o resultado de 5% de 2000
}



(function(){
    const aliquotaImposto = percentualComBaseNoSalario(valorSalario);//acha o percentual
    const valorImposto = calcularDesconto(aliquotaImposto,valorSalario);//acha o valor a ser retirado do salario
    const valorAtransferir = valorBeneficio+(valorSalario-valorImposto);//
    print(valorAtransferir.toFixed(2));

})();

