 //Q1. 
 //What will the following print in JS
let str= "har\"";
 console.log(str.length);

 //Q2.
 //Explore the includes , startwith and endwith functio  of a string

console.log(str.includes("h")); 
console.log(str.startsWith("a"));
console.log(str.endsWith("a"));

//Q3.
//write a program to convert a given String to Lowercase and Upper case
let string = "abcdefghijklmnopqrstuvwxyz";
console.log(string.toLowerCase());
console.log(string.toUpperCase());

//Q4.
//Extract something from the string
let str2="The amout is 1000"
console.log(Number.parseInt(str2.slice("The amout is ".length)));

//Q5.
//Try to change 4th character of a given string .
/// strings are immutable . we can not change it.
