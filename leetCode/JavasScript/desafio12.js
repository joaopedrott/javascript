

async function sleep(millis) {// recebe milisegundos
    let promise = new Promise ((resolve, reject)=>{
        setTimeout(()=>{//apos milisegundos a promise resolve   e guarda o valor "done"
            resolve("done");
        }, millis);
    });
    let response = await promise;//serve para pausar a execução da função assíncrona sleep até que a Promise seja resolvida.
}




 
  let t = Date.now()
  sleep(100).then(() => console.log(Date.now() - t)) // 100
 