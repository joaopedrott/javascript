/*
Escopo

2 tipos de escopos: Global e Local
*/

//escopo global
const nome = ' matheus'
const idade = 27

function dizerOla () {
    const nome2= 'miguel' // escopo local
    console.log('Ola ' + nome2 + ', tudo bem?' + ' Eu sou o '+ nome)
}

dizerOla()
//Lembrando que let e const são blocos de escopo ou escopo em bloco, quer dizer que eles só funcionam dentro do bloco que foram declarados.