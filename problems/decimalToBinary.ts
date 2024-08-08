import { Stack } from "../data-structures/stack";

function decimalToBinary(decNumber: number) {
    const remStack = new Stack(); // Inicializando a stack
    let number = decNumber; // Atribuindo o parâmetro 'decNumber' para a variável 'number
    let rem; // Inicializando uma variável undefined
    let binaryString = ""; // Inicializando uma variável com o valor de string vazia

    while (number > 0) { // {1} Enquanto o resultado não for zero
        rem = Math.floor(number % 2); // {2} Vamos obter o resto da divisão
        console.log('valor de rem é: ', rem)

        remStack.push(rem) // {3} E fazer o push desse valor na stack

        number = Math.floor(number / 2) // {4} Por fim, atualizar o número que será divido por 2
        console.log('valor de number é :', number)
    }

    while (!remStack.isEmpty()) { // {5} Realizando o pop dos valores da pilha até que esteja vazia
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

console.log("O binário do decimal 233 é:", decimalToBinary(233))
console.log("O binário do decimal 5 é:", decimalToBinary(5))