/*
Um array é a estrutura de dados mais simples possível em memória, 
armazenando valores que são todos do mesmo tipo, sequencialmente.

Por que devemos usar arrays?
R: Vamos supor que precisamos armazenar a temperatura média de cada mês do ano para a cidade em que vivemos.
Poderíamos usar algo semelhante ao código a seguir para armazenar essas informações:
*/

const averageTempJan = 31.9
const averageTempFeb = 35.3
const averageTemMar = 42.4
const averageTempApr = 52
const averageTempMay = 60.8

/*
No entanto não é a melhor abordagem. Se fôssemos armazenar a temperatura somente de um ano,
poderíamos administrar as doze variáveis. O que ocorreria, porém, se precisássemos armazenar
a temperatura média para mais um ano? Esse é o motivo pelo qual os arrays foram criados, e
podemos representar facilmente as mesmas informações mencionadas antes da seguinte forma:
*/

const averageTemp: number[] = []
averageTemp[0] = 31.9
averageTemp[1] = 35.3
averageTemp[2] = 42.4

/*
Representação gráfica do array: 

averageTemp = [ 31.9 ,  35.3 ,  42.4 ,  42.4 ,  60.8 ]
  indices ->   [0]     [1]     [2]     [3]     [4] 
*/


/*
Acessando elementos e fazendo uma iteração em um array

Para acessar uma posição em particular do array, podemos também usar colchetes,
passando o índice da posição que gostaríamos de acessar. Por exemplo, vamos supor
que queremos exibir todos os elementos do array 'daysOfWeek'. Para isso, precisamos
percorrer o array com um laço e exibir os elementos, começando do índice 0:
*/

const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}

// Fibonacci

const fibonacci: number[] = []

fibonacci[1] = 1
fibonacci[2] = 1

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
}


// Inserindo elementos no final de um array
let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.push(10) // Insere um elmento com o valor 10 no final do array

// Inserindo um elemento na primeira posição
numbers.unshift(-2, -1) // Inserindo elementos com valores negativos no início do array numbers

// Removendo um elemento no final do array
numbers.pop() // Remove o último elemento, com valor 10

// Removendo um elemento da primeira posição
numbers.shift() // Remove o primeiro elemento do array, com o valor de -2

// Adicionando e removendo elementos de uma posição específica

numbers.splice(5, 3) // Remove três elementos a partir do índice 5 do array 'numbers'
// Isso significa que numbers[5], numbers[6] e numbers[7] serão removidos.

numbers.splice(5, 0, 5, 6, 7) // Adicionando de volta os três elementos removidos do array 'numbers'
// Isso significa que irá adicionar os elementos numbers[5], numbers[6] e numbers[7] com os valores respectivos novamente

/*
Métodos essenciais disponíveis em um array.

.concat         - Junta vários arrays e devolve uma cópia dos arrays concatenados.
.every          - Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido.
.filter         - Cria um array com todos os elementos avaliados com true pela função especifica.
.forEach        - Executa uma função específica em cada elemento do array.
.join           - Reúne todos os elementos do array em uma string.
.indexOf        - Pesquise o array em busca de elementos específicos e devolve a sua posição.
.lastIndexOf    - Devolve a posição do último item do array que corresponda ao critério de pesquisa.
.map            - Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
.reverse        - Inverte o array, de modo que o último item se torne o primeiro, e vice-versa.
.slice          - Devolve um novo array partir do índice especificado.
.some           - Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido.
.sort           - Organiza o array em ordem alfabética ou de acordo com a função especificada.
.toString       - Devolve o array na forma de string.
.valueOf        - É semelhante ao método toString e devolve o array na forma de uma string.
*/

// Arrays em TypeScript

interface Person {
    name: string;
    age: number;
}

const friends: Person[] = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
]

function comparePerson(a: Person, b: Person) {
    // Conteúdo da função comparePerson
}