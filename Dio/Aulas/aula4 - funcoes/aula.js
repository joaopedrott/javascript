function teste() {
    console.log(`teste`)
}


//definindo a funcao principal
function main() {
    console.log('teste222');
}

//atualizando a funcao principal
main = function () {
    console.log(2)
}

main();//o resultado vai ser 2 pois a funcao main foi atualizada com console.log(2)


/*  Para uma funcao principal isolada para executar somente uma vez, podemos fazer assim:
1 - funcao normal
function main() {
    console.log(1);
}
main();

2 - funcao imediata ou funcao imediatamente invocada
    (function main() {
        console.log(1);
    })();

3 - funcao imediatamente invocada nao nomeada //neste caso nao podemos atualizar pois nao temos o nome pq esta nao nomeada
    (function () {
        console.log(1);
    })();   */