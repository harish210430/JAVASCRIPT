
// 1.
function test() {
    alert("Hello");
}
test(); // Hello
//  It will return undefined.

// 2.
function test01() {
    return;
}
test01(); // void, Nothing will print
//  It will return undefined.

// 3.
function test02() {
    return 21;
}
test02(); // void, Nothing will print
// It will return 21.

// 4.
function test04() {
    return null;
}
test04(); // void, Nothing will print
// It will return null.

// 5.
function test05() {
    console.log('hello');
}
test05(); // hello
// It will return undefined.

// 6.
function test06() {
    prompt('Enter your age?');
}
test06(); // It will prompt the msg but can't store it So It will give Nothing.
// return undefined.

// 7.
function test07() {
    return prompt('Enter your age');
}
test07(); // Nothing will Print
// It will return the 'age' as String, what user Entered.

// 8.
function test08() {
    return function second() {};
}
test08(); // Nothing will Print
// return f second() {}

// 9.
// function sayHello() {
//     let userName = "John";
//     return `Hello ${userName}`;
// }
// let tes = sayHello(); // Nothing will Print
// // return 'Hello John'.

// 10.
let username = 'Sam';
function sayHello() {
    let username = 'John';
    return `Hello ${username}`;
}
let testo = sayHello();
console.log(username); // Sam
// return 'Hello John'

// 11.
let usrname = 'Sam';
function syHello() {
    return `Hello ${usrname}`;
}
let te = syHello();
console.log(usrname); // 'Sam'
// return 'Hello Sam'
