//Q1. 
// let personage = prompt(`enter your age`);
// if (personage>=10 && personage<=20) {
//     console.log("aapki umar sahi hai");
// } else if(personage>20){
//     console.log("Bujurg");
// }
// else{
//     console.log("abhi aap bache hain");
// }
// In this question we were getting an error that Prompt is not defined because i was using prompt in non - browser environment and The prompt() function is specific to browser-based JavaScript, used to interactively get input from the user in a browser dialog box.

//Q2.
// let age = prompt("enter number 1 to 5 ");
// switch (age) {
//     case '1':
//         console.log(" your age is 1");
//         break;
//     case '2':
//         console.log(" your age is 2");
//         break;
//     case '3':
//         console.log(" your age is 3");
//         break;
//     case '4':
//         console.log(" your age is 4");
//         break;
//     case '5':
//         console.log(" your age is 5");
//         break;
//     default:
//         console.log("Beep beep error 404");
//         break;
// }

//Q3.

let num = prompt("enter your num");
num = Number.parseInt(num)
if (num%2==0 && num%3==0) {
    console.log("number is divisible");
} else {
    console.log("worng number");
}

//Q4.
// write a Js program to find a number is divisible by either 2 or 3 
let num2 = prompt("enter number");
let num1 = Number.parseInt(num2)
if (num1 %2==0 || num1 %3==0)  {
    console.log("number is divisible");
} else {
    console.log("worng number");
}

//Q5. 
// Print " you can drive " or " you cannot drive" based on the age being greater than 18 using ternary operator.

let age = prompt("enter your age")
let Agee = Number(age);
Agee = Agee > 18? "You can Drive" : "YOu cannot drive";
