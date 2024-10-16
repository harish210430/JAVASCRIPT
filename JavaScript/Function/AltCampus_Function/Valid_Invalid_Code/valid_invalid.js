/* 1.

function add( let a = 0, let b = 0) {
    return a + b;
}
console.log(add(21, 22)); // Error: Unexpected identifier 'a'
// Invalid code, becoz we can only pass any value or expression as an argument But we can't pass statement as argument.

*/

/* 2.

function add(a = 0; b = 0) {
    return a + b;
}
console.log(add(21, 23)); // Error: Unexpected token ';'
// Invalid code, becoz (a = 0;) is also a statement.

*/

/* 3.

function add(a = 0, b) {
    return a + b;
}
console.log(add(21)); // a = 21, b = 'undefined' => 21 + 'undefined' = NaN
// Valid code, becoz (a = 0) is a Expression.

*/

/* 4.

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(undefined, 21)); // 21, becoz undefined is a default value so a = 0, b = 21 .
// Valid code, both are expression.

*/

/* 5.

function knowWhy(value) {
    return if(value === 21) {
        console.log("yes");
    } else {
        console.log("No");
    }
}
console.log(knowWhy(211)); // Error: Unexpected token 'if'
// Inalid code, becoz if() {} is a statement, Can't return statements.

*/

/* 7.

function isItIf(ifElse) {
    return isElse;
}
console.log(isItIf(if(true){console.log('Testing')})); // Error: Unexpected token 'if'
// Invaild code, if is a statement.

*/

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(null, 21)); // 21, becoz null + 21 = 21
// Valid code, all are expressions.

