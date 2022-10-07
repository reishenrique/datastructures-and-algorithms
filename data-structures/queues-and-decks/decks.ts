// Deck or double-ended queue (Deque ou fila de duas pontas)

class Deck {
  itens: any[];
  constructor() {
    this.itens;
  }

  addFront(item: number | string) {
    return this.itens.unshift(item);
  }

  addBack(item: number | string) {
    return this.itens.push(item);
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.itens.shift();
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.itens.pop();
  }

  peekFront() {
    return this.itens[0];
  }

  peekBack() {
    return this.itens[this.itens.length - 1];
  }

  size() {
    return this.itens.length;
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  clear() {
    this.itens = [];
  }
}
