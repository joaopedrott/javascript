
/* tipos primitivos de dados
    boolean
    null
    undefined
    number
    sting 
    synbol

    //obs: tipos primitivos sao imutaveis
*/

//object
//obs: objetos tem metodos
//-----------------------------------
//boolean
//Wrappers para encapsular
// existem classes ou wrappers que representam os tipos primitivos para mudar valor da variavel 
// true, false
//new Boolean(true)
//-----------------------------------
//coercao de tipos
//eh a convercao de tipos como:
// (10 + "10") = 1010
//------------------------------------
//NULL
// a variavel existe mas nao tem valor dentro dela
//------------------------------------
//undefined
//inexistencia da variavel
//ex: usando objeto
/* 
    const x ={nome: null};
    console.log(x.nome); // resultado eh null
    console.log(x.idade); // undefined pois nao existe a variavel idade
*/

/*
const a; // vai dar erro pois necessita iniciar a variavel com um valor
let a; //undefined pois eh considerada ausencia de declaracao
let a=null//null ausencia de valor


*/
//------------------------------------
//numbers, string e symbol
// numbers
// todos os numeros sao numeros/number
//console.log(typeof(10))
//alem disso +Infinity, -Infinity e NaN tambem sao number
// a linguagem javascript tem problema em fazer certas equacoes, esse problema eh pela forma como ela interpreta os numeros ou baseado em um formato numerico que tem esse problema
//o formato numero eh
//Double Precision 64-bit binary format IEEE 754
//eh um erro que acontece como eh feito as equacoes em binario
//EX: console.log(0.1 - 0.3)
// no javascrip geralemte eh usado o decimal js, eh uma biblioteca que resolve o problema fazendo uma equacao precisa e sem erros.
//------------------------------------------
//String
//"texto"(aspas duplas) para caracteres e textos
//----------Exemplo-----------
// console.log("<div id="10">teste</div>")
//daria errado pois o programa nao entenderia aonde comeca e aonde termina as aspas duplas, para corrigir isso podemos usar a \
//console.log("<div id=\"10\">teste</div>")
//----------Exemplo-----------
//'texto' (aspas simples) para html
/*  const id=20;
console.log('<div id="'+ id + '">teste</div>'); */
//----------Exemplo-----------
//`texto` (templete string)
/* const id=20;
console.log(`
    <div id="${id}">
        teste
    </div>
    `); */
    //a facilidade do `` crase, eh quebrar  linha sem usar \n
//------------------------------------------
//symbol
//forma de criar objetos ou simbolo imutavel e unico
//----------Exemplo-----------
/* const x = Symbol('10')
const y =Symbol('10')
console.log(x===y)// false */
//----------Exemplo-----------
/* const x = Symbol('10')
const y =x
console.log(x===y)// true pois eh a mesma instancia dentro da outra */