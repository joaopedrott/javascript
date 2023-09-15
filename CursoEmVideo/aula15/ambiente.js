let num = [5,8,2,9,3]
num.push(1)
num.sort()
//console.log(`O vetor tem ${num.length} posicoes`)
//console.log(`O primeiro valor do vetor e ${num[0]}`)
/* for(c=0;c<num.length;c++){
    console.log(num[c])
} */

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
