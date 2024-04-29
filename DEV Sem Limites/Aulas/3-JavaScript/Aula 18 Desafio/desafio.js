
//1
const frutas = ['maca', 'uva', 'pera', 'banana', 'laranja']
console.log(frutas.length)
/* 
//2
for(i=0; i< frutas.length; i++) {
    console.log(frutas[i])
}

//3
const usuario = {
    nome: 'joao',
    email: 'joao@gmail.com'
}

for (atributo in usuario){
    console.log(usuario[atributo])
}

//4
for (const iterator of frutas) {
    console.log(iterator)
}

 */

// desafio

let fruta = encontrarFruta('mamao')
console.log(fruta)
function encontrarFruta(fruta) {
    

    for (i=0; i< frutas.length; i++){
        if(frutas[i] == fruta){
            return 'Fruta encontrada!'
        }
        
    }
    return 'Fruta não encontrada!'

}