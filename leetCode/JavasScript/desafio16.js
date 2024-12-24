//2637. Promise Time Limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var timeLimit = function (fn, t) {//funcao que recebe uma funcao e 100 milissegundos
  return async function (...args) {//recebe 150 ou 90 milissegundos

    return await new Promise((resolve, reject) => {//precisa ser promessa por conta do async

      //Primeiro, crio um temporizador que rejeita a promessa após 't' milissegundos
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Executa a função original 'fn'
      fn(...args) //recebe 150 ou 90
        .then((result) => {
          clearTimeout(timer); // Limpa o temporizador se 'fn' resolver a tempo
          resolve(result);
          
        })
        .catch((error) => {
          clearTimeout(timer); // Limpa o temporizador se 'fn' rejeitar
          reject(error);
        });
    });

  };
};

 //passa a funcao e o tempo limite de 100 milisegundos para funcao timeLimit
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);

limited(150) 
.then(() => console.log("Resolvida em 150")) 
.catch(console.log); // "Time Limit Exceeded" at t=100ms // Para testar a resolução dentro do tempo limite 


limited(90) 
.then(() => console.log("Resolvida em 90")) 
.catch(console.log); // "Resolvida" e "Sucesso"


//teste diferente da resolucao
/* const limited =  timeLimit(async (a, b) => { 
    await new Promise(res => setTimeout(res, 120)); 
    return a + b; 
})

limited(5,10)
.then(() => console.log("Resolvida")) 
.catch((error) => console.log(error.message)); // "Time Limit Exceeded" at t=100ms // Para testar a resolução dentro do tempo limite  */