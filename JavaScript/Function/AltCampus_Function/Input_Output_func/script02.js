
// Return: returned value ko, jahan function call ho rha hai vaha show krata hai.

/*
@input a,b (number, number)
@output a+b
*/
function sum(a, b) {  // parameters, parameters are the placeholders.
    return a + b;
}
console.log(sum(3, 10)); // Arguments, Arguments are the real values.
// let result01 = sum(19, 10);
// console.log(result);
// console.log(result01);

/*
@input name {string} and console.log(name)
no output
*/
function returnName(name) {
    console.log(name);
}

// returnName("Rohan");
// returnName("Kamlesh");

/*
@input num (number)
@output num * num
*/
function square(number) {
    return number * number;
} 

square(13);
square(20);

/*
@input firstName, lastName (string, string)
@output firstName + lastName
*/
function fullName(firstName, lastName) {
    return firstName + lastName;
}

fullName("Ranveer", "Allahabadiya");
fullName("Tony", "Stark");