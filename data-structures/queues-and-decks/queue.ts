// Queue (Fila)

class Queue {
  itens: any[];
  constructor() {
    this.itens = [];
  }

  enqueue(item: number | string) {
    this.itens.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.itens.shift();
  }

  peek() {
    return this.itens[0];
  }

  isEmpty() {
    return this.itens.length == 0;
  }

  size() {
    return this.itens.length;
  }

  last() {
    return this.itens[this.itens.length - 1];
  }

  clear() {
    this.itens = [];
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("Henrique");
queue.enqueue("Renato");
queue.enqueue("Clara");

console.log(queue.peek());
console.log(queue.size());
console.log(queue.last());
console.log(queue.isEmpty());

//ueue.dequeue();
//queue.dequeue();
