//Q1.
//Print marks of an object using for loop

let marks={
    harry : 99,
    samy:98,
    mon: 91
 } 
 for(let i=0;i<Object.keys(marks).length;i++){
console.log(Object.keys(marks)[i] ,"=",marks[Object.keys(marks)[i]]);
}

//Q2. 
//Print marks of an object using for-in loop
let mark={
    harry : 99,
    samy:98,
    mon: 91
 } 
 for(let i in mark){
console.log(i,"=",mark[i]);
}

//Q3.
//Write a program to print "try again" until the user enters the correct number.
let correct_num= 5;
let num;
while(num !=correct_num){
    num=prompt("enter your guess");
}
console.log("your guess is correct");
//Q4.
//Write a function to find mean of 5 numbers.
let mean =(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
console.log(mean(3,5,8,6,9));