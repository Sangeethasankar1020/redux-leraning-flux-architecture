import { compose, pipe } from "lodash/fp";
import "./App.css";

// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 4));

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// // const x = add(3);

// // console.log(x(5));
// console.log(add(3)(5));

// const add2 = (a) => (b) => (c) => a + b + c;

// console.log(add2(3)(5)(10));

// function presslike() {
//   return function () {
//     console.log("Thanks");
//   };
// }
// // we are calling one function but it returns another function
// let fn = presslike();
// let message = fn();
// we can refer function to variables
// let pL = presslike;
// pL();

// function sayThanks(fn) {
//   console.log(fn());
// }

// sayThanks(presslike); //passing another function as arguments
// // map - higher order function
// array = [1, 2, 3];
// array.map((number) => number * 5);

// setTimeout(() => console.log("Hi"), 1000);

// let input = "Subcribe";

// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;

// const toLowerCase = (str) => str.toLowerCase();

// // loadash
// // const transform = compose(wrapInDiv, toLowerCase, trim); //right to left fun execute
// const transform = pipe(trim, toLowerCase, wrapInDiv); //left to right execute
// console.log(transform(input));

// // const result = wrapInDiv(toLowerCase(trim(input)));

// // impure function
// function randomNumber(number) {
//   return number * 3;
// }
// // pure function - cashable - operation speed- independant work
// function isEligible(age, minAge) {
//   return age > minAge;
// }

const person = {
  name: "sangeetha",
  address: {
    city: "ooty",
    country: "India",
  },
};
const updated = {
  ...person,
  address: {
    ...person.address,
    country: "Singapore",
  },
  name: "bala saravanan",
};
// person.name = "bala";
// updated.address.country = "Singapore";
console.log(person);
console.log(updated);

function App() {}
export default App;
