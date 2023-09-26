const precoEtiqueta = 100
const condicaoPag= 4

/* condicoes de pagamento
 1 a vista debito, recebe 10% de desconto
 2 a vista no dinheiro ou pix, recebe15% de desconto 
 3 Em duas vezes, preco normal de etiqueta sem juros
 4 Acima de duas vezes, preco normal de etiqueta mais juros de 10% */

if (condicaoPag===1) {
    //A vista 10% de desconto
    const desconto = precoEtiqueta*0.1
    const preco =precoEtiqueta-desconto
    console.log(`O Deconto eh ${desconto} reais e o preco total ficou ${preco} reais`)
} else if(condicaoPag===2) {
    //pix 15% de desconto
    const desconto = precoEtiqueta*0.15
    const preco =precoEtiqueta-desconto
    console.log(`O Deconto eh ${desconto} reais e o preco total ficou ${preco} reais`)

} else if(condicaoPag===3){
    //preco de etiqueta
    console.log(precoEtiqueta)

} else {
    //etiqueta mais 10% de juros
    const juros = precoEtiqueta*0.1
    const preco =precoEtiqueta+juros
    console.log(`Com o juros de ${juros} reais e o preco total ficou ${preco} reais`)
}