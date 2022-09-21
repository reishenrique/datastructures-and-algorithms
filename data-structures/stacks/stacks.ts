class Stack {
  items: (number | string)[];
  constructor() {
    this.items = [];
  }

  push(element: number) {
    this.items.push(element);
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

const stack = new Stack(); // Declaring the stack class
console.log(stack.isEmpty()); // Checking if the stack is empty

// Adding four elements
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.peek()); // Returning the last element of the stack - 40
console.log(stack.size()); // Returning the stack size - 4
console.log(stack.isEmpty()); //Checking if the stack is empty (Now it's false because there are elements on the stack)

stack.pop(); // Removing element from top of stack - 40
stack.pop(); // Removing another elemento from top os stack - 30

console.log(stack.size()); // Now the stack size is 2
console.log(stack.peek()); // Returning the las element os the stack again - 20
