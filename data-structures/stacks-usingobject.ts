class StackObject {
  items: number[];
  count: number;
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
}

const stackObject = new StackObject();
stackObject.push(5);
stackObject.push(10);
