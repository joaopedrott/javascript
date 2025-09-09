//2624  Snail Traversal

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

//matriz
Array.prototype.snail = function(rowsCount, colsCount) {// rowsCount = 5, colsCount = 4
  //pega o numero de linhas e colunas para achar a quantidade de numeros da matriz e compara com o tamanho do array
  //se nao for igual, retorna array vazio e encerra o programa
  if(rowsCount * colsCount !== this.length){
    return []
  }

  //cria array vazia
  const matrizVazia = Array.from({ length: rowsCount }, () => new Array(colsCount).fill(0));


  let elementIndex = 0;
  for(let j=0; j<colsCount; j++){
    if(j%2===0){
      // Lógica para preencher de cima para baixo
      for(let i=0; i<rowsCount;i++){
        matrizVazia[i][j]=arr[elementIndex]
        elementIndex++
      }
    } else {
      // Lógica para preencher de baixo para cima
      for(let i=rowsCount-1; i>=0;i--){
        matrizVazia[i][j]=arr[elementIndex]
        elementIndex++
      }
    }
  }
  return matrizVazia
  

  
/*

  for(let i=0; i<rowsCount; i++){
    for(let j=0; j<colsCount; j++){
      temp.push(arr[i][j])
    }
    res.push(temp)
    temp=[]
  }

  return res

*/
}
const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(arr.snail(5,4)); // [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]]
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */