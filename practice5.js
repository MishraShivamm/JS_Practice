//Q1.
//Create an aaray of numbers and take the input from the user to  add numbers to this array.

// let arr=[1,2,3,4,5,6,7];
// console.log(arr);
// arr[0]= 5;
// console.log(arr);
// let num = prompt("enter a number");
// num = Number.parseInt(num);
// arr.push(num);
// console.log(arr);

//Q2.
// kepp adding numbers to the Array above until 0 comes
// let arr=[1,2,3,4,5,6];
// let num;
// do{
//     num=prompt("Enter a number");
//     num=Number.parseInt(num);
//     arr.push(num);
// }while(num!=0);
// console.log(arr);

//Q3.
//filter for numbers divisible by 10 from a given array
// let arr1=[10,2,30,40,5,650];
// let filterarr=arr1.filter((a)=>{
//     return a %10 ==0
// });
// console.log(filterarr);

//Q4. 
//Create an array of square of given numbers
// let arr1=[10,2,30,40,5,650];
// let filterarr=arr1.map((a)=>{
//     return a *a
// });
// console.log(filterarr);
//Q5.
//use reduce to calculate factorial of a given number from an array of first n natural numbers.
let arr = [1,2,3,4,5,6]
let filterarr=arr.reduce((x1,x2)=>{
    return x1*x2
});
console.log(filterarr);

