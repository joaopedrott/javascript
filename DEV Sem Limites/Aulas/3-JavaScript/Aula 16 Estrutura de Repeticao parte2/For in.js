// Estruturas de Repeticao Parte 2

// For in 
//Serve para percorrer propriedades enumeradas(que nao tem indice) em um objeto

const pessoa = {
    nome: 'joao',
    idade: 29,
    profissao: 'Desenvolvedor'
}
    
for (atributo in pessoa) {
    console.log('O atributo '+ atributo +' = ' + pessoa[atributo])
}
//ex pessoa[atributo] vai mudar o atributo entre nome, idade,profissao