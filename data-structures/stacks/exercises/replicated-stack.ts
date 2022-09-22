class StackReplicate {
  items: number[];
  constructor() {
    this.items = [];
  }

  push(element: number) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return (this.items = []);
  }
}

const stackReplicate = new StackReplicate();

console.log(stackReplicate.isEmpty()); // true
console.log(stackReplicate.size()); // 0

stackReplicate.push(100);
stackReplicate.push(200);
stackReplicate.push(300);

console.log(stackReplicate.size()); // 3
console.log(stackReplicate.isEmpty()); // false

stackReplicate.pop(); // 300
stackReplicate.pop(); // 200

console.log(stackReplicate.peek()); // 100
console.log(stackReplicate.size()); // 1

stackReplicate.clear();

console.log(stackReplicate.size()); // 0
console.log(stackReplicate.isEmpty()); // true
