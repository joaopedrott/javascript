//2637. Promise Time Limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
//funcao de ordem superior que recebe uma funcao e um tempo que por sua vez retorna uma promessa
var timeLimit = function (fn, t) {//funcao que recebe uma funcao e 100 milissegundos
  return async function (...args) {//recebe 150 ou 90 milissegundos

    return new Promise((resolve, reject) => {//precisa ser promessa por conta do async

      //Primeiro, crio um temporizador que rejeita a promessa após 't' milissegundos
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Executa a função original 'fn'
      fn(...args) //recebe 150 ou 90
        .then((result) => {
          clearTimeout(timer); // Limpa o temporizador se 'fn' resolver a tempo
          resolve(result);//resolve a promessa
          
        })
        .catch((error) => {
          clearTimeout(timer); // Limpa o temporizador se 'fn' rejeitar
          reject(error);//rejeita a promessa em caso de erro
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

/*


anotacoes:
Async e await são usados para trabalhar com código assíncrono em JavaScript. Async para funcoes e await para pausar a execucao ate que uma promessa seja resolvida para entao continuar a execucao do codigo.

Promise é um objeto que representa o resultado de uma operacao assincrona. Com ele podemos simular uma chamada de uma API, por exemplo, usando o setTimeout para simular uma demora de 1 segundo.


obs: fetch é uma funcao que retorna uma promessa. Tanto no fetch quanto na promise nos usamos o then e o catch para tratar o resultado da promessa.

obs: a funcao eh funcao de ordem superior, pois ela recebe outra funcao como parametro e retorna uma funcao. Nao necessariamente precisa retornar e receber uma funcao ao mesmo tempo para ser considerada uma funcao de ordem superior.

ex: https://www.youtube.com/watch?v=we5Ac8U21lI
*/