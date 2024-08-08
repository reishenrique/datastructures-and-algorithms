// Criando uma classe Stack baseada em objeto

/*
Quando trabalhamos com arrays, a maioria dos métodos tem uma complexidade de tempo O(n)

Isso significa que, para a maioria dos métodos, devemos iterar pelo array até encontrarmos o elemento 
que estamos procurando e, no cenário de pior caso, faeramos a iteração por todas as posições do array,
considerando que n é o tamanho do array. Se o array tiver mais elementos, demorará mais para iterar pelos
elementos, em comparação com um array com menos elementos. Além disso, um array é um conjunto ordenado de elementos,
e, para mantê-los assim, seria necessário ter mais espaço na memória também.
*/

export class ObjectStack {
    private count: number; // Propriedade count como auxilio a manter o controle do tamanho da stack, utilizada como chave para os elementos
    private items: any;
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element: number) { // Adicionando um elemento na stack
        this.items[this.count] = element; // Utilizando o valor do count como chave, e o elemento como valor
        this.count++; // Incrementando +1 quando um valor for adicionado
    }

    size() { // Verificando o tamanho da stack
        return this.count;
    }

    isEmpty() { // Verificando se a stack está vazia
        return this.count === 0
    }

    pop() { // Removendo o elemento do topo da stack
        if (this.isEmpty()) { // {1} Verificando se a stack está vazia 
            return undefined;
        }

        this.count--; // {2} Se a stack não estiver vazia, irá decrementar a propriedade count
        const result = this.items[this.count] // {3} Armazenando o valor do topo da stack
        delete this.items[this.count] // {4} Depois que o elemento for removido
        return result // {5} Devolvendo o valor armazenado do topo da stack
    }

    peek() { // Retornando o elemento que está no topo da stack
        if (this.isEmpty()) { // Primeiro verificando se a stack não está vazia
            return undefined;
        }

        return this.items[this.count - 1]; // Retornando o elemento que está no topo
    }

    clear() { // Limpando a stack
        this.items = {};
        this.count = 0;
    }

    clearWithWile() { // Limpando a stack de outra maneira
        while (!this.isEmpty()) { // Realizando um laço while até que a stack esteja completamente limpa
            this.pop() // Removendo elemento por elemento até a condição do while seja false
        }
    }

    toString() { // Método para exibir o conteúdo da pilha de modo semelhante a um array
        if (this.isEmpty()) { // Verifando se a stack está vazia
            return "" // Caso esteja fazia irá retornar uma string vazia
        }

        let objString = `${this.items[0]}`; // Inicializando a string com o primeiro elemento, que está na base da stack

        for (let i = 1; i < this.count; i++) { // Iterando por todas as chaves da pilha (propriedade count)
            objString = `${objString}, ${this.items[i]}` // Até seu topo, adicionando uma vírgula ',' seguida do proximo elemento.
        }

        return objString
    }
}

const objStack = new ObjectStack()

objStack.push(5) // Adicionando 5 à pílha
objStack.push(10) // Adicionando 10 à pílha

/*
Internamente, teremos os valores a seguir nas propriedades items e count:

items = {
    0: 5,
    1: 8
};

count = 2
*/

console.log(Object.getOwnPropertyNames(objStack)) // ['count', 'items']
console.log(Object.keys(objStack)) // ['count', 'items']
// console.log(objStack.items) // { '0': 5, '1': 10}
// console.log(objStack.count) // { '0': 5, '1': 10}

/*
Os dois console.log comentados acima foram colocados afim de testes
Foram usados os controlador de acesso 'private' na definição das propriedades da classe na linha 14 e 15
Para não ser possível acessar os valores dos atributos e alteralos fora da classe ObjectStack

Ao descomentar os consoles da linha 97 e 98, irá aparecer um erro sobre isso.
*/