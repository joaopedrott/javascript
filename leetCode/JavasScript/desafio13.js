var cancellable = function(fn, args, t) {

    const cancelFn = () => {
        clearTimeout(timer);//cancela a funcao setTimeout
    }

    const timer = setTimeout(() => {//depois de t milisegundos, chama a funcao fn com os argumentos args
        fn(...args);
    }, t);

    return cancelFn;

};


   const result = [];
 
   const fn = (x) => x * 5; //funcao multiplica numero por 5
   const args = [2]; //array com numero 2
   const t = 20 ; // tempo em milisegundos para a funcao ser chamada
   const cancelTimeMs = 50; //tempo limite
 
   const start = performance.now();//tempo inicial
 
   const log = (...argsArr) => {//funcao que sera chamada
       const diff = Math.floor(performance.now() - start);
       result.push({"time": diff, "returned": fn(...argsArr)});
  }
        
   const cancel = cancellable(log, args, t);//chamada da funcao
 
   const maxT = Math.max(t, cancelTimeMs);//compara e pega o valor maximo entre das duas variaveis
            
   setTimeout(cancel, cancelTimeMs);//chamada da funcao de cancelamento
 
   setTimeout(() => {//chamada da funcao de log
       console.log(result); // [{"time":20,"returned":10}]
   }, maxT + 15)
 