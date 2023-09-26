const precoEtanol = 5.79 // 1 litro custa 5.79
const kmPorLitro= 10 // 1 litro vale 12 km
const distanciaEmKm=100 // percorri 1580 km
const tipoCombustivel = `Etanol`
const precoGasolina = 6.66

const litrosConsumidos = distanciaEmKm / kmPorLitro // km por litro que o carro faz, dividido pela distancia total a ser percorrida
//const resultado = litrosConsumidos * precoEtanol // litros consumidos em toda viagem com esse carro X o valor do combustivel atualmente

if (tipoCombustivel===`Etanol`) {
    const resultado = litrosConsumidos * precoEtanol
    console.log(resultado.toFixed(2))
} else {
    const resultado = litrosConsumidos * precoGasolina
    console.log(resultado.toFixed(2))
}

