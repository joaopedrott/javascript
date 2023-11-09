//Funcionamento das promises
//Assincronismo eh quando uma coisa nao executa necessariamente imediatamente(demora a executar)
//temos vantagem em usar promises pois tem bastante coisas traduzidas para elas
//criando uma promessa

/* const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})
 */
//tratando a resposta da promessa
/* promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('Finalizou')
    })
 */
//--------------------------------------------------------
//simulando o assincronismo
//criando uma promessa
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)//mil milisegundos ou 1 segundo
})
console.log('Vai filhao!')
//tratando a resposta da promessa
 promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
        return value +10
    })
    .then((value)=>{
        console.log(value)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('Finalizou')
    })
 //obs
 /*
 na promise, se der certo ela executa o resolve e se der errado ela exacuta o reject
 */