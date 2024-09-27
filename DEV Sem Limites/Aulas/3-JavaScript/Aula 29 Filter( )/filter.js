/*
Filter()
o filter retorna todos os elementos que atender a condicao que ele estipular
*/


const pessoas = [
    {nome: 'Joao', idade: 2},
    {nome: 'Maria', idade: 18},
    {nome: 'Jose', idade: 10},
    {nome: 'Pedro', idade: 22},
    {nome: 'Paula', idade: 4}
]
// filter pode receber ate 3 parametros: ex pessoa,index,array
const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade>=18)
/*
ou na forma completa
const pessoasMaioresDeIdade = pessoas.filter(pessoa => {
    return pessoa.idade>=18
    })
*/

console.log(pessoasMaioresDeIdade)
