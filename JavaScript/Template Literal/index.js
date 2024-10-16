
// Template Literal
const userName = `Harish Rajput`;
let bio = `Learning to code`;

let firstName = "Arya";
let lastName = "Stark";
alert("I am" + " " + userName + " " + "and my bio is" + " " + bio);
alert("I\'m" + " " + firstName + " " + lastName + " " + "of Winterfell");

alert(`I am ${userName} and my bio is ${bio}`);
alert(`I'm ${firstName} ${lastName} of Winterfell.`);

let amount = 200;
const taxPercent = 10;
alert(`The total amount is ${amount}.`);
alert(`The taxAmount is ${(amount * taxPercent) / 100}`);

alert("The total amount is " + amount + "\n" + "The tax amount is " +  [(amount * taxPercent) / 100]);
