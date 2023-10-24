//variaveis e escopo

/* var var1 = 10;
var var2 ='20';

console.log(var1 - var2)
 */
//--------------------------------------------
//hoisting
/* function teste1(){
    console.log('teste1')
}

var teste2 = function(){
    console.log('teste2')
}

teste1()
teste2() */
//--------------------------------------------
//O teste2 nao funciona como esperado, pois o javascript executa antes de qualquer coisa a declaracao de variavel, nesse caso 'var teste2',em seguida chamo as funcoes, so que nao existe nada na funcao 'teste2'pois nada foi atribuido a ela, apenas foi declarada automaticamente pelo javascript, ja a funcao teste1 funciona pois o javascript declara a funcao completamente antes de qualquer coisa
/* teste1()
teste2()
function teste1(){
    console.log('teste1')
}
var teste2 = function(){
    console.log('teste2')
} */
// obs o mesmo ocorre com uma variavel
//ex:
/* console.log(var1)
var var1='teste' */


//--------------------------------------------
//var, let e const
//ex Var
// a variavel var nao sai do escopo de funcao, isso quer dizer que variavel Var criada dentro de uma funcao so existe dentro de uma funcao. Alem disso a variavel do tipo VAR eh global, todo o codigo consegue enxergar ela se ela se ela estiver declarada fora de uma funcao, ja dentro de uma funcao ela so pertence aquela funcao
/* function teste(){
    var var1 = 10;
}

teste();

console.log(var1) */
//--------------------------------------------
//ex LET
// a variavel do tipo LET ela se restringe a todo e qualquer bloco de codigo, seja funcao, if,else e etc. O LET so fica global estando fora de todo e qualquer tipo de bloco.

/* let var1
 function teste(){
    var1 = 10;
}

teste();

console.log(var1)  */
//--------------------------------------------
//ex CONST
//funciona da mesma forma que o LET mas a atrubuicao de valor so pode ser feita uma vez para esse tipo de variavel. Ela eh constante.
//--------------------------------------------
//convencoes e nomeclaturas
//as variaveis podem comecar com letras, anderline ou dolar
//ex var teste, var _teste e var $teste
var teste= 10
var _teste=11 //essa variavel com '_' eh restrita ao escopo ou bloco do codigo ou nao deve ser alterada fora daquele escopo ou bloco de codigo
var $teste=12
console.log($teste)

//*Comecar o nome da VARIAVEL com letra minuscula
//*Quando eh CLASSE ou FUNCAO CONSTRUTORA o nome da variavel comeca com letra maiuscula
//*Quando vamos declarar uma COSNTANTE deixamos o nome totalmente com letra maiuscula (para ficar facil de entender que eh uma constante)