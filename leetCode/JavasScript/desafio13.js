//2621. Sleep

async function sleep(millis) {// recebe milisegundos
    
    let promise = new Promise ((resolve, reject)=>{

        setTimeout(()=>{//apos milisegundos a promise resolve e guarda o valor "done"
            resolve("done");
        }, millis);
    });
    let response = await promise;//serve para pausar a execução da função assíncrona sleep até que a Promise seja resolvida.
    
}




 
  let t = Date.now()// tempo inicial
  sleep(100).then(() => console.log(Date.now() - t)) // 100

//obs: o Date.now() retorna o tempo atual em milisegundos desde a época (1 de janeiro de 1970)
// t representa o tempo inicial e quando chamo date.now() ele retorna o tempo atualizado entao so eh subtrair para encontraro tempo passado desde o inicio ate o fim

/*
neste caso pega o tempo antes da executao de sleep
quando sleed termina o tempo estipulado para setTimeout, eh pego o tempo novamente e subtrai do tempo pego inicialmente para ter o tempo passado desde o inicio ate o fim do codigo


*/
 