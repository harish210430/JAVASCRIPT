// Unlike a variable, Jaise var. ko ek bar declare karne ke bad frequently(bar-bar) use kar sakte hai.
// Vaise hi function ko bhi define krke frequently use kr sakte hai.
// Function hume redundancy(repeatation) se bachata hai. becoz repeatation is not good for code.

/*
// Defining a function/Function Defination:
function square() {
    let num = +prompt("Enter the number:");
    alert(`Square of the ${num} is : ${num * num} `);
}

// Function Execution/Function Call:
square();
*/
function grow(x){
    let result = 1;
   let numbers = [5, 4, 3, 2, 1];
    for(let i = 0; i < numbers.length; i++) {
      result = result * numbers[i];
    }
    return result;
  }
  console.log(grow(5)); 