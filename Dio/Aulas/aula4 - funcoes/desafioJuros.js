function aplicarDesconto(valor,desconto){
    return valor-(valor*(desconto/100))
}

function aplicarJuros(valor,juros){
    return valor+(valor*(juros/100))
}
function desconto(valor,pagamento){
//console.log(`o produto de preco ${valor} Reais com desconto de ${desconto}%, ficou por ${aplicarDesconto(valor,desconto)} Reais`)
 if (pagamento===1) {
    //A vista 10% de desconto
    console.log(`Aplicado 10% de desconto no valor de ${valor} reais ficou por ${aplicarDesconto(valor,10)} reais`)
} else if(pagamento===2) {
    //pix 15% de desconto
    console.log(`Aplicado 15% de desconto no valor de ${valor} reais ficou por ${aplicarDesconto(valor,15)} reais`)
} else if(pagamento===3){
    //preco de etiqueta
    console.log(`Ficou no valor de ${valor}`)
} else {
    //etiqueta mais 10% de juros
    const preco = aplicarJuros(valor,10)
    console.log(`Com o juros de 10% no valor ${valor} reais o preco total ficou por ${preco} reais`)
} 
}

/* condicoes de pagamento
 1 a vista debito, recebe 10% de desconto
 2 a vista no dinheiro ou pix, recebe15% de desconto 
 3 Em duas vezes, preco normal de etiqueta sem juros
 4 Acima de duas vezes, preco normal de etiqueta mais juros de 10% */


(function (){
    desconto(100,4)
})()