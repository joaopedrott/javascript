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
