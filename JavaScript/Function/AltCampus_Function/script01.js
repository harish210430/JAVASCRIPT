// Create a Function called 'sayHello' that alert "Hello World".
function sayHello() {
    alert("Hello World!");
}
sayHello();

// Create a Function called 'fulName' with following steps:
//  1. Prompt msg 'firstName'
//  2. Promot msg 'lastName'
//  3. concat 'fistName' and 'lastName', Alert fulName.

function fulName() {
    let firstName = prompt("Enter your first Name:");
    let lastName = prompt("Enter your last Name:");
    // let fullName = firstName + " " + lastName;
    let fullName = `${firstName} ${lastName}`;
    alert(fullName);
}
fulName();

// Create a Function called 'addTwoNumbers' with following steps:
//  1. prompt 'firstName'
//  2. prompt 'second'
//  3. Add 'first' and 'second' into another variable.
//  Alert 'sum'
function addTwoNumbers() {
    let firstNum = +prompt("Enter the first no.:");
    let secondNum = +prompt("Enter the second no.:");
    let sum = firstNum + secondNum;
    alert(sum);
}
addTwoNumbers();

// Create a Function called 'getTable' with following steps: 
// prompt a Number.
// logs the multiplication table of number.
function getTable() {
    let num = +prompt("Enter the Number:");
     for(let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
     }
}
getTable();

// Create a Function called 'isLeapYear' with following steps:
// prompt 'year'
// Alert '[year] is leap year' otherwise not a leap year.
function isLeapYear() { 
    let year = +prompt("Enter the year:");
    if( year % 400 === 0 ) {
        alert(`${year} is a leap year.`);
    } else if(year % 100 === 0) {
        alert(`${year} is not a leap year.`);
    } else if(year % 4 === 0) {
        alert(`${year} is a leap year.`);
    } else {
        alert(`${year} is not a leap year.`);
    }
}
isLeapYear();

// Create a Function called 'getFactorial' with following steps: 
//  prompt 'Number'
// Alert 'factorial'.
function getFactorial() {
    let number = +prompt("Enter the Number:");
    // let factorial = number;
    // for(let i = number; i > 1 ; i--) {
    //     factorial = factorial * (i-1);
    // }
    let factorial = 1;
    for(let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    alert(`The factorial of ${number} is: ${factorial}`);
}
getFactorial();