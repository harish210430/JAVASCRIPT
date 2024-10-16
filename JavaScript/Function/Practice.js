// Create function that takes a string as an argument & return the no. of vowels.

let count = 0;
function returnVowels(str) {
    for(let i = 0; i < str.length; i++) {

        if( str[i] === 'a'
            || str[i] === 'e' 
            || str[i] === 'i' 
            || str[i] === 'o' 
            || str[i] === 'u' ) {
            count++;
        }
    }
    return `the vowels are ${count}.`;
}
console.log(returnVowels("aokoo"));

/*
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

function returnVowels(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                count += 1;
            }
        }
    }
    return `the vowels are ${count}.`;
}
returnVowels("apnacollege"); // the vowels are 5.
*/


// Arrow Function:

let cont = 0;
const countVowels = (str) => {
    for( let char of str ) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            cont++;
        }
    }
    return `string has ${cont} vowels.`;
}
console.log(countVowels("apnoa"));
