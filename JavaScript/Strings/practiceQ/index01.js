
//  prompt their full name. Generate the username based on input (full name),
// username always like as: @ + full name + lenght of the name. 

let fullName = prompt("Please! Enter your name:");
let userName = `@${fullName}${fullName.length}`;
alert("username: " + userName);
console.log("username:", userName);