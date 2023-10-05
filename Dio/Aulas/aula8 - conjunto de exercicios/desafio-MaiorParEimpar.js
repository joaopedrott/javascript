


(function () {
    const { gets, print } = require('./funcoes-auxiliaresMaiorParEimpar');
    const quantidade = gets();
    let maiorPar = null;
    let menorImpar = null;

    for (let i = 0; i < quantidade; i++) {
        const element = gets();

        if (element % 2 === 0) {
            //par
            if (maiorPar === null || element > maiorPar) {
                maiorPar = element;
            }
        } else {
            //impar
            if (menorImpar === null || element < menorImpar) {
                menorImpar = element;
            }
        }
    }
    print(`Maior numero par e ${maiorPar}`);
    print(`Maior numero impar e ${menorImpar}`);
})();