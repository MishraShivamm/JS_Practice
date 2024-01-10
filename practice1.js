// Q1. 
let str= "abc";
let num =89;
let result = str + num;
console.log(result);

// Q2.
console.log(typeof result);

//Q3.
const obj ={
    name:"shivam",
    age:"23"
} 
// No , We can't change a const obj to hold a number or string later. here obj is reference to the original object . 

// Q4.
obj['roll no.'] = "2819364"
console.log(obj);
// the reference to the object (obj) cannot be changed, but properties can be added or modified within the original object that obj refers to.

//Q5.
// Write a program in JS to create a word meaning dictionary of 5 words .
const dictionary ={
    Eloquent: "Fluent or persuasive in speaking or writing",
    Vibrant: "Full of energy and enthusiasm; bright and striking.",
    Serene: "Calm, peaceful, and untroubled.",
    Resilient: "Able to withstand or recover from difficult conditions.",
    Inquisitive: "Eager to learn, curious, and inquiring."
}

console.log(dictionary.Serene)