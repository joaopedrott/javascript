
//Manipulando arquivos atraves de promises


//1(extra)-quando o arquivo esta em uma pasta diferente
const path = require('path')
//2(extra) linka o arquivo na variavel filePath
const filePath = path.resolve(__dirname, 'tarefas.csv')
//3(extra) depois inseri a variavel no passo 2 da promise

//1 cria fs
const fs = require('fs')
//
// antigo desafado fs.readFile()

//2 pede para ler o arquivo usando promise
//jeito mais atual de pedir para ler o arquivo tarefas.csv com promises
const promesaDaLeituraDoArquivo = fs.promises.readFile(filePath)

//3 trata a resposta ou promessa de leitura do arquivo
promesaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemOCabecalho)=> linhasSemOCabecalho.map((linha)=>{
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() ==='true'
        }
    } ))
    .then((listaDeTarefas)=> console.log(listaDeTarefas))
    .catch((error) => {
        console.log('Deu ruim!', error)
    })

//Anotacoes, 
/*

a funcao split converte o texto em uma lista/array
a funcao slice(1) exclui a primeira linha da lista ou o item da primeira posicao 

*/
