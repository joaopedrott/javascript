/*
reduce()

pega os elementos da array e reduz a um unico valor


*/

const funcionarios = [
  { nome: "Douglas", salario: 10000 },
  { nome: "Ana", salario: 12000 },
  { nome: "Maria", salario: 15000 },
];

const salarioTotal = funcionarios.reduce((total, funcionario) => {
  return total + funcionario.salario;
}, 0);
console.log(salarioTotal);

//reduce pode receber ate 3 parametros total, funcionario, index e o zero ( 0 )
/*
*o total seria a variavel que acumula o que iremos reduzir

*funcionario seria nesse caso cada elemento da array

*index

*0 (valor de inicializacao) para nesse caso comecar a contagem do acumulo a partir do zero ( 0 )
*/

/*
Da para fazer uma array usando reduce tambem

const numbers = [1, 2, 3, 4, 5, 6];

// Usar reduce para filtrar números pares e dobrar os valores
const result = numbers.reduce((acc, n) => {
  if (n % 2 === 0) {
    acc.push(n * 2);
  }
  return acc;
}, []);
console.log(result); // [4, 8, 12]





*/