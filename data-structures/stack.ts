/*
A estrutura de dados 'Stacks' nos oferecem mais controle sobre a adição e remoção dos elementos.

Uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO (Last In First Out, o útlimo a entrar é o primeiro a sair).
A adição de novos itens ou a remoção de itens existentes ocorrem na mesma extremidade. O final da pilha é conhecido como 'topo', enquanto
o lado oposto é conhecido como base. Os elementos mais novos ficam próximos ao topo, e os elementos mais antigos estão próximos da base.
*/

// Criando uma classe Stack baseada em array

class Stack {
    items: string[];
    constructor() {
        this.items = []; // Array utilizado para armazenar os elementos da pilha
    }

    // Método push é responsável pela adição de novos elementos no topo da pilha
    push(element: string) {
        this.items.push(element)
    }

    // Método pop é responsável pela remoção do último item adicionado à pilha
    pop() {
        return this.items.pop()
    }

    // Método peek retorna qual é o item que está no topo da pilha
    peek() {
        return this.items[this.items.length - 1]
    }

    // Método isEmpty retorna true caso a pilha esteja vazia ou false caso contenha algum elemento
    isEmpty() {
        return this.items.length <= 0 ? true : false
    }

    // Método clear limpa todos os elementos da pilha
    clear() {
        this.items = []
    }

    // Método size retorna o tamanho da pilha
    size() {
        return this.items.length
    }
}

// Utilizando a classe Stack

const stack = new Stack()

console.log(stack.isEmpty()) // True (a pilha está realmente vazia)

stack.push('primeiro elemento') // Adiciona 'primeiro elemento' a pilha
stack.push('segundo elemento') // Adiciona 'segundo elemento' a pilha

console.log(stack.peek()) // Retorna 'segundo elemento' ( Elemento que está no topo da pilha)

stack.push('terceiro elemento') // Adiciona 'terceiro elemento' a pilha

console.log(stack.size()) // Retorna '3' (Contém 3 elementos na pilha)

stack.push('quarto elemento') // Adiciona 'quarto elemento' a pilha

console.log(stack.isEmpty()) // Retorna 'false' (A pilha contem 3 items)

stack.pop() // Removendo o elemento do topo da pilha ('quarto elemento')
stack.pop() // Removendo mais uma vez o elemento atual do topo da pilha ('terceiro elemento')

console.log(stack.size()) // Retorna '2' (Agora existem apenas 2 elementos na pilha)
