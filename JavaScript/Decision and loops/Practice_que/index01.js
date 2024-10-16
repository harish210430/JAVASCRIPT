// Print all no. from 0 to 100.

// for(let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// Print 0 to 100 Even no.


// for(let i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// Create a game where gameNumber is something given and user guessing the Number until he enters correct value.

let gameNumber = 67;
let userEntered = +prompt("Guess the Right No. :");
while(gameNumber !== userEntered) {
     userEntered = +prompt("Please Enter the correct number:");
} 
alert("Match Found"); 


