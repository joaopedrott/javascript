//2726. Calculator with Method Chaining

class Calculator {
    
    /** * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        this.result /= value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// Função para simular a execução com base nas ações e valores
function simulateCalculator(acoes, valores) {
    try {
        let calculator;
        let valorIndex = 0;

        // O primeiro item das ações sempre será "Calculadora"
        // O primeiro valor sempre será o valor inicial do construtor
        const acaoInicial = acoes[0];
        const valorInicial = valores[valorIndex++];
        
        // Cria uma nova instância da Calculadora
        calculator = new Calculator(valorInicial);

        // Percorre as ações a partir do segundo item
        for (let i = 1; i < acoes.length; i++) {
            const acao = acoes[i];
            const valor = valores[valorIndex++];

            switch (acao) {
                case "adicionar":
                    calculator.add(valor);
                    break;
                case "subtrair":
                    calculator.subtract(valor);
                    break;
                case "multiplicar":
                    calculator.multiply(valor);
                    break;
                case "dividir":
                    calculator.divide(valor);
                    break;
                case "potência":
                    calculator.power(valor);
                    break;
                case "obterResultado":
                    // A ação de obterResultado não precisa de um valor, 
                    // mas o loop continua para que o getResult seja chamado
                    break;
                default:
                    throw new Error(`Ação desconhecida: ${acao}`);
            }
        }

        return calculator.getResult();
    } catch (error) {
        return error.message;
    }
}

// Exemplo 1
const acoes1 = ["Calculadora", "adicionar", "subtrair", "obterResultado"];
const valores1 = [10, 5, 7];
const resultado1 = simulateCalculator(acoes1, valores1);
console.log(`Exemplo 1 - Saída: ${resultado1}`);

// Exemplo 2
const acoes2 = ["Calculadora", "multiplicar", "potência", "obterResultado"];
const valores2 = [2, 5, 2];
const resultado2 = simulateCalculator(acoes2, valores2);
console.log(`Exemplo 2 - Saída: ${resultado2}`);

// Exemplo 3
const acoes3 = ["Calculadora", "dividir", "obterResultado"];
const valores3 = [20, 0];
const resultado3 = simulateCalculator(acoes3, valores3);
console.log(`Exemplo 3 - Saída: ${resultado3}`);


