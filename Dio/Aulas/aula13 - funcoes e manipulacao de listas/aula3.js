//Aula 3 Closures ou Fechamentos
// caracteristica das funcoes, o closure
//EX
function soma(x) {
    return function(y){
        return x + y;
    }
}
//ex 1 soma(10)(20)
//x eh 10 e y eh 20

//ex 2
const somaParcial = soma(10) // somaParcial eh o mesmo que soma(10)
//x eh 10

console.log(somaParcial(20))//y eh 20. soma(10)(20)
console.log(somaParcial(30))//y eh 30. soma(10)(30)
console.log(somaParcial(40))//y eh 40. soma(10)(40)
//cada y foi somado com 10

/* 
    Obs: Quando declara uma funcao, ela se lembra do contexto em que ela foi declarada. Neste caso, no momento da criacao da funcao somaPartcial ela guarda o valor passado na sua criacao, o X se tornou um valor imutavel x=10
    Neste exemplo quando a funcao foi chamada com 10, o valor foi posto em X quando depois foi chamado com novo valor
    ela foi colocando em Y e somando
 */