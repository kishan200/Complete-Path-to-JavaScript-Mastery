// CREATING A VARIABLE USING VAR KEYWORD
// var name = "kishan";

// CREATING A VARIABLE USING VAR KEYWORD
// let name = "kishan";

// CREATING A VARIABLE USING VAR KEYWORD
//const name = "kishan";

// *** String ***
// const singQuotes = "hello !";
// const doubleQuetes = "hello!!";
// const name = "kishan";
// const backtick = `Hello, ${name}! , welcome`;
// const backticks = `${2 + 2}`;

//*** NUmber ***
// const WholeNo = 5;
// const decimalno = 0.5;

// const fno = 5;
// const sno = 10;
// const result = fno + sno;

//***Booleasn ***
// true - yes ,correct,1
//false -no,incorrect,0

// const isCool = true;

// if (isCool) {
//   console.log("hi man ,you're cool");
// } else {
//   console.log("oh,hi...");
// }

//const age = 21;

//null
//let age = null;

//undefine
//let x;

//object
// const person = {
//   name: "kishan",
//   age: 25,
// };

// Array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// const data = new Date();
// console.log(data);

// arithmetic opration
// const a = 5;
// const b = 10;
// let result = 0;

// //addition
//     result = a + b;
// //sub
//     result = a - b;
// //mul
//     result = a * b;
// //div
//     result = a / b;
//exponent
//result = b ** a;

//modulo
//12%13
//result = a % b;

//incremenr decrement

//result++;
//result--;

//**** comarison operators  */
const a = 5;
const b = 10;

// console.log(a > b);

// console.log(a < b);

// //is equal
// console.log(a == b);

//not equal
//console.log(a !== b);

//***** Logical operation */

//and && ==> All opwrand are TRUE => TRUE
//console.log(true && false && true);

//or || => at list one operand is true =>true
//console.log(true || false);

//not !
//console.log(!true);

//***assignmennt operator* */

// let no = 5;

// no += 5; //no = no + 5'
// no -= 5; //no = no - 5'
// no *= 5; //no = no * 5'
// no /= 5; //no = no / 5'

// let string = "hello";

// string += ", I am ksiahn!";
//console.log(string);

//***** if statement */

// const age = 18;

// if (age > 18) {
//   console.log("you may enter");
// } else if (age == 18) {
//   console.log("you just turnet 18");
// } else {
//   console.log("grow up");
// }

//***** truthy -falsy-value */

// const dog = 5;
// if (dog) {
//   console.log(`you have ${dog} dog `);
// } else {
//   console.log("you have no dog");
// }

//falsy values => false
// false
// 0
// ''
// null
// undefined
// NaN

// true
// 1
// "hello"
// 85
// {}
// []

//*** Logical operation */

// const age = 18;
// const isCool = true;
// if (isCool && age > 18) {
//   console.log("you my enter !");
// } else {
//   console.log("you cannot enter");
// }

// console.log("truyh" && "test" && 999);

//console.log("truyh" || 1 || "test" || 999);

//console.log(!0);

// const value = false;
// if (!!value) {
//   console.log("value is Truthy");
// } else {
//   console.log("value is falsy");
// }

/******* switch statement */

//const superhero = "iron man";

// switch (superhero) {
//   case "iron man":
//     console.log("i am iron man...");

//     break;

//   case "thor":
//     console.log("this is my hammer");
//     break;

//   default:
//     console.log("enter valid super hero");
// }

//28.********* ternary operator

//condition ? true : false;

//

//*****29.looping while and for -loops */
// the while loop

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//* for loop

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//***** function */

// A  FUNCTION DECLARATION
// function square(x) {
//   return x * x;
// }
// //A FUNCTION CALL
// const result = square(5);
// console.log(result);

// // A FUNCTION DECLARATION
// function name(params){
//     //ststements
//  }
// //A FUNCTION EXPRESSION

//     const name = function(params){
//         //statement
//     }
//     //an ARROW FUNCTION/
//    const name  = (params) => {
//        //statement
//    }

// function sayHi(name) {
//   console.log(`hi,${name}`);
// }
// sayHi("kishan");
// sayHi("google");

//RETURNS INDEFINED

// function add(a, b) {
//   return a + b;
// }

// const sum = add(20, 5);

// console.log(sum);

// function test() {
//   console.log(1);
//   return true;
//   console.log(2);
//   return false;
// }

// const bool = test();

// console.log(bool);

//***33  arrow finction */

// const square = (no) => {
//   return no * no;
// };

// const square1 = (no) => no * no;

// const result = square(5);
// const result1 = square(10);

// console.log(result);

// console.log(result1);

//paramaters -used when defining a func
//arrguments - passed when making a func call

// const sayHi = (name, age) => {
//   console.log(`${name} is ${age} year old`);
// };
// sayHi("kishan", 21);

//**** 36 GLOBAL SCOPE */

// const name = "kishan";

// const logName = () => {
//   console.log(name);
// };
// logName();

// local scope / function scope
// const someFunction = () => {
//   //local scope
//   const name = "janny";
//   console.log(name);
// };
// const anotherFunction = () => {
//   //local scope
//   const name = "kishan";
//   console.log(name);
// };
// anotherFunction();
// someFunction();

////**block scope */

// if (true) {
//   const name = "kishan";
//   console.log(name);
// }

// console.log(name);

//***37 hosting in javascript */
// console.log(aeg);

// var age = 20;

// function hoist() {
//   var msg = "test";
//   console.log(msg);
//   }
// hoist();

//**** 38. closure */

// const outer = () => {
//   const outerVar = "hello";

//   const inner = () => {
//     const innerVar = "hi";

//     console.log(outerVar, innerVar);
//   };
//   return inner;
// };
// const innerFn = outer();

// innerFn();

// const init = () => {
//   const hobby = "learning js"; // Local variable created by inner function

//   const displayHobby = () => {
//     //display is the inner function a closure
//     console.log(hobby); // using a variable created in the parent function
//   };
//   displayHobby();
// };
// init();

//***48 array  */

// const month = ["january", "february", "march", "april"];
// //console.log(month);
// for (let i = 0; i < month.length; i++) {
//   console.log(month[i]);
// }

// //****49 array method */

// const names = ["kishan", "akash", "jigar", "mars"];
// //arry push -add new element
// names.push("rahul");

// //arry pop- delete the last element of array
// names.pop();

// //array shift delete the first elements of an arry
// names.shift();

// // arry unshift add a new value of yhe start of an array
// names.unshift("hitesh");

// //arry splice- to add/remove new valuew in ant position
// //names.splice(2, 0, "harshil", "shubham");

// //array slice-copies certain of an array into a neely created arry
// //const noonLink = names.slice(2);

// console.log(names);

//*****50 Array forEach*/

//***51 Array map
const name = ["kishan", "rahul", "akash", "jigar"];
//array foeEach

name.forEach((name, i) => {
  console.log(name, i);
});

let sum = 0;
const numbers = [10, 50, 9, 81];

numbers.forEach((number) => {
  sum += number;
});
console.log(sum);

// const inventary = [
//   { price: 5, name: "apple" },
//   { price: 4, name: "orange" },
//   { price: 3, name: "mango " },
//   { price: 5, name: "banana" },
// ];

// //array map

// const prices = inventary.map((item) => item.price);
// const items = inventary.map((item) => item.name);

// console.log(prices);

// console.log(items);
