
// Create function "sayHello" that accept parameter (name) and Alert(`Hello ${name}`).
function sayHello(name) {
    return `Hello ${name}`;
}

alert(sayHello("John"));


// Create function "getFullName" that accept two parameter ('firstName', 'lastName') and return(`fullName').
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let fullName = getFullName("John", "Snow");
// console.log(fullName);

// function 'addTwoNumbers' accept (firstNum, secondNum), return sum, if user passes other then number, alert 'Enter Valid input'.
function addTwoNumbers(firstNum, secondNum) {
    if(typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        alert("Enter the valid input.")
    } else {
        return firstNum + secondNum;
    }
}

console.log(addTwoNumbers("k",9));


// calC(numA, numB, operation), operation can only (+, -, *, /), if numA or numB any other data type "Enter valid input".
function calC(numA, numB, operation) {
    if( typeof numA !== 'number' || typeof numB !== 'number') {
        alert("Enter the valid input");
    } else {
        switch(operation) {
            case 'add':
                return numA + numB;
                break;
            case 'sub':
                return numA - numB;
                break;
            case 'mul':
                return numA * numB;
                break;
            case 'dev':
                return numA / numB;
                break;
            default:
                return "Enter valid operation";
        }
    }
}
console.log(calC(4,5,'mul'));


// function 'isLeapYear' accept number return true or false.
function isLeapYear(year) {
    if(year % 400 === 0) return true;
    if(year % 100 === 0) return false;
    return year % 4 === 0;
    }
    isLeapYear(2019);

// 'getFactorial'
function getFactorial(number) {
    let result = number;
    for(let i = number; i > 1; i--) {
        result = result * (i-1);
    }
    return result;
}
console.log(getFactorial(6));