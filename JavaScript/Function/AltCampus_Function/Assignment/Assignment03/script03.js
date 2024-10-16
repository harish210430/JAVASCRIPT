/*
function checkage(age) {
if(age > 18) {
return true;
} else {
 return confirm('Did your parents allow you?');
 }
}
 */ 

/*
// Using Ternary Operator:
function checkAge(age) {
    return(age > 18) ? true: confirm('Did your parents allow you?');
}

// Using || operator:
function checkAge(age) {
    return age > 18 || confirm('Did your parents allow you?');
}
// console.log(checkAge(17));
*/


// After removing 'else': No change in O/P.
function checkAge(age) {
    if(age > 18) {
    return true;
    }  
     return confirm('Did your parents allow you?');
}
console.log(checkAge(19));  
// console.log(checkAge(17));