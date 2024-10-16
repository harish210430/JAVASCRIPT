/* 1. minToSec

function minToSec(minutes) {
    return `Total Seconds: ${minutes * 60}sec`;
}
console.log(minToSec(4));
*/

/* 2. isRange function, validate a number is in Range or Not?

// let num = +prompt("Please! Enter a number:");
function isRange(a, b, num) {
    if(num > a && num < b) {
        return `${num} is in Range.`;
    } else {
        return `Please! Enter valid input.`;
    }
}
console.log(isRange(2, 9, NaN));
*/

/* 3. calculateBMI: bmi = weight / (height ** 2) 

let bmi;
function calculateBMI(weight, height) {
    bmi = weight / (height * height);
    switch(true) { // switch over true, becoz bmi ke base pr we calculate the O/P.
        case bmi < 18.5:
            return `Underweight`;
            break;
        case 18.5 < bmi && bmi < 24.9:
            return `Normal Weight`;
            break;
        case 25 < bmi && bmi < 29.9:
            return `Overweight`;
            break;
        case bmi > 30:
            return `Obese`;
            break;
        default:
            return `Enter the valid Input.`;
    }
}
console.log(calculateBMI(40, 1.5));
*/


/* 4. Add two no. or string.

function sum(val1, val2) {
    // return val1 + val2;
    if(typeof val1 === "number" && typeof val2 === "number") {
        return  val1 + val2;
    } else if(typeof val1 === "string" && typeof val2 === "string") {
        return `${val1} ${val2}`;
    } else {
        return `Enter the valid input.`
    }
}
console.log(sum(2, "8"));
// console.log(sum("Lakshmi", "Narayan"));
*/


// 5. appropiateDrinks, takes age arg and suggest the drink based on age.

function appropiateDrinks(age) {
    switch(true) {
        case age < 14:
            return `drink fruit juice`;
        case age > 14 && age < 18:
            return `drink soda`;
        case age >= 21:
            return `drink fruit-flavoured beer`;
        default:
            return `Enter valid age`;
    }
}
console.log(appropiateDrinks(17));
