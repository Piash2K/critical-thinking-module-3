// let count = 0;
// const counter = (amount) => {
//   count = count + amount;
//   return count;
// };
// console.log(counter(3));
// console.log(counter(5));

// let count = 5;
// const counter = (amount) => {
//   count = count + amount;
//   return count;
// };
// console.log(counter(2));
// console.log(counter(2));
// console.log(counter(2));

const createCounter = () => {
  let count = 0;
  return (amount) => {
    count = count + amount;
    return count;
  };
};
const counter = createCounter();
// console.log(counter(5));
// console.log(counter(3));
// console.log(createCounter(5))
// console.log(createCounter(4))

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);
const counter2 = new Counter(6);
counter1.add(2);
counter1.add(5);
counter1.print();

counter2.add(20);
counter2.add(30);
counter2.print()
