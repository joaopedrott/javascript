//2725. Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args); //executa imediatamente
    const timer = setInterval(() => { //setInterval começa a executar fn a cada 35 milissegundos
        fn(...args); 
    }, t);

     const cancelFn=()=> {
        clearInterval(timer);// como timer executa para sempre a cada 35 milissegundos, ele precisa ser cancelado(parado)
    }   

    return cancelFn;
};










   const result = [];
 
   const fn = (x) => x * 2;
   const args = [4]; 
   const t = 35;
   const cancelTimeMs = 190;
 
   const start = performance.now(); // valor do tempo inicial
 
   const log = (...argsArr) => {
       const diff = Math.floor(performance.now() - start);
       result.push({"time": diff, "returned": fn(...argsArr)});
   }
        
   const cancel = cancellable(log, args, t);//executa a funcao mas o retorno eh a funcao de cancelamento
 
   setTimeout(cancel, cancelTimeMs);//manda parar a funcao depois de 190 milisegundos
    
   setTimeout(() => {
       console.log(result); // [
                            //     {"time":0,"returned":8},
                            //     {"time":35,"returned":8},
                            //     {"time":70,"returned":8},
                            //     {"time":105,"returned":8},
                            //     {"time":140,"returned":8},
                            //     {"time":175,"returned":8}
                            // ]
   }, cancelTimeMs + t + 15)    
