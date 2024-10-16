
// Local Variable: they define inside the function, they can't access outside of the function.
/* Function parameters: are the local variable,have block scope. */
 function sayHello() {
    let userName = "John";
    return `Hello ${userName}`;
 }

//  console.log(userName); // userName is not defined. 
 let val = sayHello();
 console.log(val);


//  Outer variable: They define outside the function, Can Access Inside the function.

let userName = "Arya";
function hiHello() {
    //  let userName = "john";

     return `Hi! ${userName}`;
}
console.log(hiHello()); // Hi! john
console.log(userName); // Arya 


// Default Parameter: Those parameters which are initialize at the time of declaration.
// Without initialization, they have default value undefined.

function sum(a, b) {
    console.log(`The value of a is ${a} and value of b is ${b}`); // a: undefined, b: undefined
    return a + b;  // undefined + undefined = NaN
}

sum(); // NaN

function addNum(a=0, b=0) {
    console.log(`The value of a is ${a} and value of b is ${b}`); // a = 3, b = 0
    return a + b; // 3 + 0
}
addNum(3); // 3
