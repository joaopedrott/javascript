let valores=[8,1,7,4,2,9]
valores.sort()
/* console.log(valores[0]) */

/* for(c=0;c<valores.length;c++){
    console.log(`A posicao ${c} tem o valor ${valores[c]}`)
} */

for(let posicao in valores){ // leitura do FOR: para cada pocicao em valores
    console.log(`A posicao ${posicao} tem o valor ${valores[posicao]}`)
}
