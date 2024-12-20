//2715. Timeout Cancellation
var cancellable = function(fn, args, t) {

    const cancelFn = () => {
        console.log("canceled");
        clearTimeout(timer);//cancela a funcao setTimeout, fazendo com que a funcao fn nunca seja chamada
    }

    const timer = setTimeout(() => {//depois de t milisegundos, chama a funcao fn com os argumentos args
        fn(...args);
        console.log("done");
    }, t);

    return cancelFn;

};


   const result = [];
   const fn = (x) => x * 5; //funcao multiplica numero por 5
   const args = [2]; //array com numero 2
   const t = 20 ; // tempo em milisegundos para a funcao ser chamada
   const cancelTimeMs = 40; //tempo limite
   const start = performance.now();//tempo inicial em milissegundos //parecido com o Date.now()
 

   //funcao que sera chamada
   const log = (...argsArr) => {
       const diff = Math.floor(performance.now() - start);
       result.push({"time": diff, "returned": fn(...argsArr)});
       /*
        pega o tempo atual menos o tempo inicial(start), arredenda o valor do tempo para o inteiro mais proximo e armazena em diff
        */
  }

        
   const cancel = cancellable(log, args, t);//chamada da funcao
 
   const maxT = Math.max(t, cancelTimeMs);//20 ou 50: Compara e pega o valor maximo entre das duas variaveis: 50
            
   setTimeout(cancel, cancelTimeMs);//chamada da funcao de cancelamento depois de 50 milisegundos
 
   setTimeout(() => {//chamada da funcao de log
       console.log(result); // [{"time":20,"returned":10}]
   }, maxT + 15)
 