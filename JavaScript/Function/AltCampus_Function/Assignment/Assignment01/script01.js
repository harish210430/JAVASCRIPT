// Use default parameter where ever you can:

/*
1. Calculate the dog'age based on conversion rate of 1 human year to 7 dog year.
function calculateDogAge(puppyAge, conversion = 7) {
    return `puppy's Age is ${puppyAge * conversion}`;
}
console.log(calculateDogAge(5,3)); // puppyAge = 5, conversion = 3 : 5 * 3 = 15
*/

/*
2. calculate the movies you watch
function calculateMoviesToWatch(age, n) {
    let result = 0;
    for(let i = age; i < 70; i++) {
         result = result + n * 48; 
    }
    return result;
}
console.log(calculateMoviesToWatch(69,2));

// OR

function calculateMoviesToWatch(age, n) {
    let max_Life = 70;
    let result = (max_Life-age) * 12 * 4 * n;
    return result;
}
console.log(calculateMoviesToWatch(68,2));
*/

/*
3. Accept celsius and convert it to fahrenheit.

function celsiusToFahrenheit(celsius) {
    return `${celsius * 9 / 5 + 32} F`;
}
console.log(celsiusToFahrenheit(50));

// Fahrenheit to celsius.
function fahrenheitTocelsius(temp) {
    return `${5 / 9 * (temp - 32)} C`;
}
console.log(fahrenheitTocelsius(10));
*/

/*
4. pow(n, x) return x in power of n.
function pow(n, x) {
    if(n < 0) {
        return `the number is below 1 is not allowed.`
    } else {
        return x ** n;
    }
}
console.log(pow(-1, 2));
*/

/*
5. sum or product of 1,2,3....n.

let sum = 0, product = 1;
function sumOrProductOfN(n, operation) {
    if(operation === "sum") {
        for(let i = 1; i <= n; i++) {
        sum = sum + i;
        }
        return `sum of first ${n} numbers is ${sum}`;
    } else if(operation === "product") {
        for(let i = 1; i <= n; i++) {
        product = product * i;
        }
        return `product of first ${n} numbers is ${product}`;
    } else {
        return `Please! Enter the valid values`;
    }
        
}
let result = sumOrProductOfN(5, "product");
console.log(result);
*/

/*
6. sum of 1 to n.

function sumOfN(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return `sum of first ${n} natural number is ${sum}`;
}
console.log(sumOfN(10));
*/

/*
7. Only multiple of 5 or 7 are considered.

function multipleOf5Or7(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        if(i % 5 === 0 || i % 7 === 0) {
            sum = sum + i;
        }
    }
    return `sum of natural number, which are multiple of 5 or 7 ,upto 10 is: ${sum}`;
}
console.log(multipleOf5Or7(15));
*/

/*
 8. function 'min' takes two arguments and return min of values.
function min(numA, numB) {
//    numA > numB ? return `min number is ${numB}`: return `min no. is ${numA}`;
   // becoz ternary Operator is a expression and expr. can't contain statement.
   if(numA > numB) {
    return `min. no. is ${numB}`;
   } else {
    return `min. no. is ${numA}`;
   }
}
console.log(min(-90, -9)); 
*/

// 10. check the typeof of paraeter?

function checkTypeOf(arg) {
    return typeof arg;
}
let result = checkTypeOf(null);
console.log(result);