//* Array Implementation

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log("Start ->",this.items.join("->"),"->End");
  }
}
const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.peek())
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())