/*

// Write function Declaration:
function addOne(n) {
    return String(n);
}

// Function Expression:
const addOne = function(n) {
    return String(n);
}

// Arrow Function without curly braces:
const addOne = (n) => String(n);

// Arrow Function with return:
const addOne = (n) => {
    return String(n);
}

// Execute the Function:
addOne(32);
let returnValue = addOne(23);
console.log(typeof returnValue);

*/

/*

// function Declaration:
function addOne(n) {
    return n + 1;
}

// Function Expression:
const addOne = function(n) {
    return n + 1;
}

// Arrow Function without curly braces:
const addOne = (n) => n + 1;

// Arrow Function with return:
const addOne = (n) => {
    return n + 1;
}

// Function Execution:
const addOne = (n) => n + 1;
addOne(40);
let returnValue = addOne(55);
console.log(returnValue); // 56
console.log(typeof returnValue); // number

*/

// 2. Subtract one

/*
// function Declaration:
function subtractOne(n) {
    return n - 1;
}

// Function Expression:
const subtractOne = function(n) {
    return n - 1;
}

// Arrow Function without curly braces:
const subtractOne = (n) => n - 1;

// Arrow Function with return:
const subtractOne = (n) => {
    return n - 1;
}

// Function Execution:
subtractOne(44);
let returnValueSub = subtractOne(80);
console.log(returnValueSub); // 79
console.log(typeof returnValueSub); // number

*/

/*
// 3. Add two no.

// Function Declaration:
function sum(a, b) {
    return a + b;
}

// Function Expression:
const sum = function(a, b) {
    return a + b;
}

// Arrow function without curly braces:
const sum = (a, b) => a + b;

// Arrow function with return:
const sum = (a, b) => {
    return a + b;
}

// Function Execution:
sum(20, 60);
let returnValueSum = sum(60, 50);
console.log(returnValueSum);  // 110
console.log(typeof returnValueSum);

*/

/*
// Square of the given value:

// Function Declaration:
function square(n) {
    return n * n;
}

// Function Expression:
const square = function(n) {
    return n * n;
}

// Arrow Function without return:
const square = (n) => n * n;

// Arrow Function with return:
// const square = (n) => {
//     return n * n;
// }

// Function Execution:
square(16);
let returnValueSquare = square(19);
console.log(returnValueSquare);
console.log(typeof returnValueSquare);

*/

/*
// 5. Find isGreater

// Function Declaration:
function isGreater(numA, numB) {
    if(numA > numB) {
        return `${numA} is greater.`;
    } else {
        return `${numB} is greater.`
    }
}

// Function Expression:
const isGreater = function(numA, numB) {
    if(numA > numB) {
        return `${numA} is greater.`;
    } else {
        return `${numB} is greater.`
    }
}

// Arrow Function with return:
const isGreater = (numA, numB) => {
    if(numA > numB) {
        return numA;
    } else {
        return `${numB} is greater`;
    }
}
*/
// Arrow Function without return: (Hint: 'Use Ternary operator')
const isGreater = (numA, numB) => (numA > numB) ? `${numA} is Greater` : `${numB} is greater`;

// Function Execution:
isGreater(7, 9);
let returnValueGreater = isGreater(29, 10);
console.log(returnValueGreater); // 29 is Greater.
console.log(typeof returnValueGreater);



/*
// 6. find Odd Or Even.

// Function Declaration:
function oddOrEven(num) {
    if(num % 2 === 0) {
        return `${num} is odd.`;
    } else {
        return `${num} is even`;
    }
}

// Function Expression:
const oddOrEven = function(num) {
    if(num % 2 === 0) {
        return `${num} is odd.`;
    } else {
        return `${num} is even`;
    }
}

// Arrow Function with return:
const oddOrEven = (num) => {
    if(num % 2 === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd`;
    }
}
*/
// Arrow function without return:
const oddOrEven = (num) => (num % 2 === 0) ? `${num} is Even.` : `${num} is Odd.` ; 

// Function Execution:
oddOrEven(23);
let returnValueOddEven = oddOrEven(90);
console.log(returnValueOddEven);
console.log(typeof returnValueOddEven); 