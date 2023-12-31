//aula 1 first class functions, high order functions, function declaration e function expression

//As funcoes do javascript sao:
//First Class Functions
//e
//Higher Order Functions
//----------------Exemplo-----------------
 function falarMeuNome(){
    console.log('Meu nome e Renan')
} 

/* 
//ex 1 referencia de funcao ou passando funcao para uma variavel
const referenciaNova = falarMeuNome

referenciaNova()
 */
//----------------Exemplo-----------------
/* 
//ex 2 passando funcao como parametro para outra funcao
//uma funcao dentro de outra, 
function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Johannsen de Paula')
}

falarMeuNomeCompleto(falarMeuNome)

 */
//----------------Exemplo-----------------
 
//ex 2.1 passando funcao como parametro para outra funcao com RETORNO DE FUNCAO e invocando ela
//uma funcao dentro de outra, 
function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Johannsen de Paula')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()//o parentese adicional vazio eh para executar a funcao retornada

 
//----------------------------------------------------
//duas caracteristicas para declarar uma funcao
//1 function expression
//2 function declaration

//2 function declaration
/* function nomeDaFuncao() {
    console.log('nomeDaFuncao')
}
 */
//1 function expression
/* 
const nomeDeOutraFuncao = function () {
    console.log('nomeDeOutraFuncao')
}
 */
/* 
nomeDaFuncao()
nomeDeOutraFuncao()
 */
//obs: a grande diferenca eh o hoisting, que eh a situacao de quando o codigo eh executado. A function declaration sofre o hoisting indo para o topo do codigo mas a function expression somente a declaracao da constante eh jogada pra cima enquanto a atribuicao da funcao a essa constante continua no mesmo lugar.