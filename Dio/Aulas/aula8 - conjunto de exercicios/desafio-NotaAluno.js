//funcoes adicionais eu coloco aqui fora

(function () {

    const { gets, print } = require('./funcoes-auxiliaresNotaAluno')
    const nota = gets();

    print(nota);

    if (nota < 5) {
        print('Reprovado!')
    } else if (nota >= 5 && nota < 7) {
        print('Recuperacao')
    } else { (nota >= 7)
        print('Aprovado')
    }


})();