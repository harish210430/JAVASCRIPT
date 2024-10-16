
1.
// let num = + prompt("Enter the number:");
// if( num % 2 === 0 )
//     alert(" number is even");
// else
//     alert("number is odd");

2.
// let numA = + prompt("Enter the number:");
// let numB = + prompt("Enter the number:");
// if( numA > numB )
//     alert(`${numA} is greater.`);
// else
//     alert(`${numB} is greater`);

3.
// let numA = + prompt("Enter the number:");
// let numB = + prompt("Enter the number:");
// numA > numB ? alert(numA) : alert(numB);

4.
// let houseName = prompt("Enter the Hunsename:");
// if( houseName === "stark")
//     alert("Winter is coming");
// else if( houseName === "lannistor")
//     alert("A lannistor Always pay his debt.");
// else
//     alert("All men must die.")
// houseName === "stark" ? alert("Winter is coming") : houseName === "lannistor" ? 
// alert("A lannistor Always pay his debt.") : alert("All men must die");

5.
// let monthName = prompt("Enter the month name:");

// switch(monthName){
//     case "January":
//         alert("January has 31 days");
//         break;
//     case "Febuary":
//         alert("Febuary has 28 days");
//         break;
//     case "March":
//         alert("March has 31 days");
//         break;
//     case "April":
//         alert("April has 30 days");
//         break;
//     case "May":
//         alert("May has 31 days");
//         break;
//     case "June":
//         alert("June has 30 days");
//         break;
//     case "July":
//         alert("July has 31 days");
//         break;
//     case "August":
//         alert("August has 31 days");
//         break;
//     case "September":
//         alert("September has 30 days");
//         break;
//     case "October":
//         alert("October has 31 days");
//         break;
//     case "November":
//         alert("November has 30 days");
//         break;
//     case "December":
//         alert("December has 31 days");
//         break;
//     default:
//         alert("Entered wrong input.");
//         // break;
// }

// let salary = + prompt("Enter the salary:");
// if(salary <= 20000) {
//     alert(` The In-Hand Amount is ${ salary - (salary * 10) / 100 }`);
// } else if(salary <= 50000) {
//     alert(` The In-Hand Amount is ${ salary - (salary * 20) / 100 }`);
// } else {
//     alert(` The In-Hand Amount is ${ salary - (salary * 30) / 100 }`);
//     }
  
// switch(true){
//     case (salary <= 20000):
//         alert(` The In-Hand Amount is ${ salary - (salary * 10) / 100 }`);
//         break;
//     case (salary <= 50000):
//         alert(` The In-Hand Amount is ${ salary - (salary * 20) / 100 }`);
//         break;
//     case (salary > 50000):
//         alert(` The In-Hand Amount is ${ salary - (salary * 30) / 100 }`);
//         break;
//     default:
//         alert("Not a valid input");
// }

// let marks = + prompt("Enter your marks:");
// if(marks > 100)
//     alert(`Marks can't be greater then 100`);
// else if(marks > 80 && marks < 100)
//     alert("Grade A");
// else if(marks > 50 && marks < 80)
//     alert("Grade B");
// else if(marks > 30 && marks < 50)
//     alert("Grade C");
// else
// alert("Grade D");

// switch(true) {
//     case marks > 100:
//         alert(`Marks can't be greater then 100`);
//         break;
//     case marks > 80 && marks < 100:
//         alert("Grade A");
//         break;
//     case marks > 50 && marks < 80:
//         alert("Grade B");
//         break;
//     case marks > 30 && marks < 50:
//         alert("Grade C");
//         break;
//     default:
//         alert("Grade D");
// }

// Weather APP

let weather = prompt("Enter the weather condition:");
if( weather === "sunny" ) {
    alert("Wear a T-shirt");
} else if( weather === "rainy" ) {
    alert(`Don't forget to take your raincote.`);
} else if( weather === "hot" ) {
    alert("Get a hanky");
} else if( weather === "freezing" ) {
    alert("Get your sweeter on");
} else {
    alert("Not a valid input");
}