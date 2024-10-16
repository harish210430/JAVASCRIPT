/* 1.
function sayHello() {
    alert("Hello JavaScript!");
}

 Call the above function.
 Store the return value in a variable named one.
 What is the typeof the value in one.
sayHello();
let one = sayHello();
console.log(typeof sayHello()); // undefined
*/

/* 2.
function sayHello() {
    let userName = prompt("Enter your name:");
    alert(`Hello ${userName}`);
}

sayHello();
let two = sayHello();
console.log(typeof two);  // undefined
*/

/* 3.
function sayHello(userName) {
    alert(`Hello ${userName}`);
}

sayHello("komal");
let two = sayHello("Rahul");
console.log(typeof two);
*/

// 4.
function sayHello(num) {
    return `${num}`;
}

console.log(sayHello(4));
let four = sayHello(3);
console.log(four);
console.log(typeof four);