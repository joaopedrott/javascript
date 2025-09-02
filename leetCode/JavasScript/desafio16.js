//2648. Generate Fibonacci Sequence

/*
A sintaxe function* define a função como um gerador. Isso significa que ela pode ser pausada, 
retornar um valor e depois ser retomada de onde parou. 
Ela é ideal para criar sequências infinitas, como a de Fibonacci, sem sobrecarregar a memória.
*/
var fibGenerator = function*() {
  let a =0;
  let b =1;
  
  yield a;
  yield b;

  while(true){
    let temp = a+b;
    a=b;
    b=temp;
    yield b;
  }


};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
