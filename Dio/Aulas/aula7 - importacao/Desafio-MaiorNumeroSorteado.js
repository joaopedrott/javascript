const {gets,print} = require('./funcoes-auxiliares')

let quantidadeDeAlunos=gets();
let maiorValorEncontrado=0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    if(numerosSorteado>maiorValorEncontrado){
        maiorValorEncontrado=numerosSorteado;
    }
}


print(`O maior numero sorteado foi ${maiorValorEncontrado}`) 
