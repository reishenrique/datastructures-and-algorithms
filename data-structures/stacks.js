var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (element) {
        this.items.push(element);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        return (this.items = []);
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.pop();
stack.pop();
console.log(stack.size());
console.log(stack.peek());
