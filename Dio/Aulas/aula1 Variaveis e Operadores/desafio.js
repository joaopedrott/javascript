const precoCombustivel = 5.79 // 1 litro custa 5.79
const kmPorLitro= 12 // 1 litro vale 12 km
const distanciaEmKm=1580 // percorri 1580 km

const litrosConsumidos = distanciaEmKm / kmPorLitro // km por litro que o carro faz, dividido pela distancia total a ser percorrida
const resultado = litrosConsumidos * precoCombustivel // litros consumidos em toda viagem com esse carro X o valor do combustivel atualmente
console.log(resultado.toFixed(2))