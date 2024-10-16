// Normal Function:
// function sayHello() {
//     let name = "John";
//     console.log(`Hello ${name}`);
// }
// sayHello();
// sayHello();


// Function with Input / multiple input:
function sayHello(name, occupation) {
     // parameter --> input
    console.log(`I'm ${name} a ${occupation}.`);
}
sayHello("Harish", "Hunter"); // arguments
sayHello("Kamal", "Student"); // arguments jo pass hoti hai.
sayHello("Bran", "Archiery"); // arguments 

// Function with Output:
function hiHello(name, postName) { 
     // parameter --> input
     return `I am ${name} a ${postName}.`; //  we can only return 1 o/p from the function. 
                                        // After return statement nothing will execute.
}
let msg1 = hiHello("Harish", "WebDeveloper");
let mssg2 = hiHello("Rohit", "frontend developer");
let msgg3 = hiHello("Aakash", "Junior developer");
alert(msg1);
console.log(mssg2);
alert(msgg3);