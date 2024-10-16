
// Strings

// let str = "ApnaCollege"
// console.log("lenght of str =", str.length); // 11
// console.log(str[0]); // A
// console.log(str[1]); // p
// console.log(str[8]); // e

let obj = {
    item: "pen",
    price: 10
};

let output = console.log(`the price of ${obj.item} is ${obj.price} rupees.` );
console.log(typeof(obj));

// There are some built-in function/method to manipulate a string.

// 1. str.toUpperCase();
// 2. str.toLowerCase();
// 3. str.trim();  it removes whiteSpaces at Start and at End.
// 4. str.slice( start, end? ); // slice means tukda, it returns piece/part of string,  End value not included.
// let str = "JavaScript";
// console.log( str.slice(2, 7) ); // vaScr

//  5. str.replace( searchVal, newVal ); // it replace searchVal from newValue.
//     str.replaceAll( searchVal, newVal ); // replace all the similar searchVal.

//  6. str.charAt( index ); print at which index, which charactor.



// In JS, strings are immutable (not changable).

let str = "ApnaCollege";
str.toUpperCase();   //  str (Original string) change nhi hogi.
console.log(str); // ApnaCollege

let newStr = str.toUpperCase();
console.log(newStr); // APNACOLLEGE

 