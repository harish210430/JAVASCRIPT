// do while loop: In this loop statement run at least once.

// let i = 20;
// do {
//     console.log("Apna College");
//     i++;
// }while(i <= 10);

// for-of loop: Used for Strings And Arrays, Not use for Objects.

//   Syntax => for(let value of str name) {   do some work   }

// let str = "JavaScript";

// To calculate lenght of the String:

// let lenght = 0;

// for(let i of str) {     // i: iterator -> characters
//     console.log("i =", i);
//     lenght++;
// }
// console.log("Size of the string:", lenght);

// for-in loop: this loop is used for Objects,Array,String. it returns key of the Object.

// Syntax => for(let key in obj var) { do some work } key -> iterator.

let student = {
    name: "Komal Kumar",
    age: 26,
    cgpa: 7.5,
    isPass: true
};

for(let key in student) {
    console.log("key =",key, " keyValue =", student[key]);
}
