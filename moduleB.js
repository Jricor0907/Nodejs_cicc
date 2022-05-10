const moduleA = require("./moduleA");

const myArr = [1, 2, 3, 4, 5];

const result1 = moduleA.mySum(...myArr);

console.log(result1);

const mySecondArr = myArr.map((el) => el * 2);

const avg = moduleA.mySum(...mySecondArr) / mySecondArr.length;

const result2 = mySecondArr.filter((el) => el > avg);

console.log(result2);

const greeting = function () {
  return console.log("Good Bye!");
};

setTimeout(greeting, 3000);

class Employee {
  constructor(name, email, department, startDate) {
    this.name = name;
    this.email = email;
    this.department = department;
    this.startDate = startDate;
  }
}

class Person extends Employee {
  constructor(name, email) {
    super(name, email);
  }
}
const person = new Person("Fumina", "hoge@com");

console.log(person);
