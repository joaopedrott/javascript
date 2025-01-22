/*
This
    Varia dependendo do contexto da execucao. 
    Dependendo do local e da forma com que voce executa a funcao o this pode variar.


*/


//DENTRO DO TERMINAL DO NAVEGADOR
//obs: objeto window representa o objeto global, ja no NODE seria global

function foo () {
    console.log(this=== global);
}
foo();

this === global;

const pessoa = {
    bah: foo
}

pessoa.bah();

//this muda de valor, antes o this era global, depois o this foi alterado para o objeto pessoa.