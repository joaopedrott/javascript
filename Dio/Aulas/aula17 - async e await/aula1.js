// Aula 1 async e await
//E uma forma diferente de escrever o then, catch e finaly na hora de tratamento de uma promise

//Manipulando arquivos atraves de async e await


//1(extra)-quando o arquivo esta em uma pasta diferente
const path = require('path')
//2(extra) linka o arquivo na variavel filePath
const filePath = path.resolve(__dirname, 'tarefas.csv')
//3(extra) depois inseri a variavel no passo 2 da promise

//1 cria fs
const fs = require('fs')

//2 le o arquivo e trata tando resposta usando async e await
async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    } catch(error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
    
}

buscarArquivo()
//obs
/*
Lembrar de usar o async antes do nome function e usar o await quando for pedir para ler o arquivo
*/