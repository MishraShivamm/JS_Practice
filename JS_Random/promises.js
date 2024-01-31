// const myPromise = new Promise((res ,rej)=>{
//     let js = true;
//     if(js=== true){
//         res("Promise fulfilled")
//     }
//     else{
//         rej("Prmoise rejected")
//     }
// });
// console.log("Promises");
// myPromise.then((data)=>{
//     return(data);
// })
// .catch((err)=>{
//     return(err);
// })
// .finally(()=>{
//     retun ("Thank You")
// });


// Other way is using async await


const abc=async ()=>{
    return await new Promise((res)=>{
        setTimeout(()=>{
            console.log("Morning ----------------- promise fulfilled");
        },6000);
    })
}
abc();