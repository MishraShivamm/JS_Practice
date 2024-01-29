/* Q1 : Write a program using prompt funnction to take input from user of age as a value from tthe userr and add alert to tell him if he can drive ! 


let age = prompt("enter your age");
age = Number.parseInt(age);
const canDrive = (age)=>{
    return age>=18 ? true: false
}
if (canDrive(age)){
    alert("YOu can drive");
    }
else {
    alert('You can not drive');
}

 or the other way 
 
if (age >= 18){
    alert("YOu can drive");
}
else {
    alert('You can not drive');
} 
*/

/* Q2: In Q1 use confirm to ask the user if he wants to see the prompt again 


const canDrive = (age)=>{
    return age>=18 ? true: false
}
let runAgain = true;
while (runAgain){
    let age = prompt("enter your age");
    age = Number.parseInt(age);
    if (canDrive(age)){
        alert("YOu can drive");
        }
    else {
        alert('You can not drive');
    }
    runAgain = confirm("Do you want to play again?")
}
*/


/* Q3. In the previous question use console.error to log the error if the age entered is negative 
*/

const canDrive = (age)=>{
    return age>=18 ? true: false
}
let runAgain = true;
while (runAgain){
    let age = prompt("enter your age");
    age = Number.parseInt(age);
    if (age<0){
        console.error("You cannot put negative value");
        break;
    }
    if (canDrive(age)){
        alert("YOu can drive");
        }
    else {
        alert('You can not drive');
    }
    runAgain = confirm("Do you want to play again?")
}
