class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca,cor,gastoMedioPorKm){
        this.marca=marca;
        this.cor=cor;
        this.gastoMedioPorKm=gastoMedioPorKm;
    }
    percorrer(distanciaEmKm,precoCombustivel) {//dentro da classe eh um metodo
        return distanciaEmKm*precoCombustivel*this.gastoMedioPorKm;
    }
}

/* function percorrer(km,preco){ // fora de uma classe eh funcao

    return km*(preco/renegade.gastoMedioPorKm)
} */


 (function(){
    const renegade= new Carro('Jeep', 'Vermelho', 1/12) //7.6km por 1 litro de gasolina
    //console.log(renegade)
    console.log(`o valor gasto sera ${renegade.percorrer(70, 5)}`)
    const palio = new Carro('Fiat','Preto',1/10)
    console.log(`O valor gasto sera ${palio.percorrer(70,5)}`)
})(); 