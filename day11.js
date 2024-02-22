// alredy we learn about what is call back , higher order function

// now lets talk abou promises(to perform async work)
// let decision = false;
// const myPromise = new Promise((resolve, reject) => {
//   if (decision) {
//     resolve("hey I am fulfilled", decision);
//   } else {
//     reject("hey I am not fulfilled your request", decision);
//   }
// });

// myPromise
//   .then((msg) => {
//     console.log("msg 1:", msg);
//     console.log("is true ? ", decision);
//     // Returning a value or a promise here will affect the next 'then'
//     return "Returning from first then";
//   })
//   .then((msg) => {
//     console.log("msg 2:", msg);
//     console.log("is true? ", decision);
//     // Returning a value or a promise here will affect the next 'then'
//     return "Returning from second then";
//   })
//   .catch((msg) => {
//     console.log("msg:", msg);
//     console.log("is true ? ", decision);
//   });


//1) Create a promise that simulates fetching data from a server. Resolve the promise with a successful message if a condition is met, and reject it with an error message otherwise.
// let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//  console.log(num)
// const isEven = new Promise((resolve,reject)=>{
//     if(num % 2 === 0){
//        resolve("success: i am even",num);
//     }
//     else{
//         reject("failure: i am odd",num);
//     }
// })
// isEven.then((msg)=>{
//     console.log("result:",msg);
// }).catch((error)=>{
//     console.log("reject:",error);
// }).finally(()=>{
//     console.log("execution done")
// })

//2 )Create a chain of three promises. Each promise should perform a different asynchronous operation (e.g., setTimeout) and pass a message to the next promise in the chain.

// let num1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// let num2 = Math.floor(Math.random() * (100 - 1 +1 )) + 1;
// console.log(num1);
// console.log(num2);
// const compareNumber = new Promise((resolve,reject)=>{
//     if(num1 > num2){
//         resolve("the number is grater :");
//     }
//     else if(num1 < num2){
//         resolve("the number is less then");
//     }
//     else if(num1 === num2){
//         resolve("both are same");
//     }
//     else{
//         reject("error from server");
//     }
// })

// let result = compareNumber.then((msg)=>{
//     console.log("Msg:",msg);
// }).then((msg)=>{
//     console.log("Msg:",msg);
// }).then((msg)=>{
//     console.log("Msg:",msg);
// }).catch((err)=>{
//     console.error("err:",err);
// }).finally(()=>{
//     console.log("execution done");
// })

function nameLength(msg){
return new Promise((resolve,reject)=>{
    if(msg.length > 6){
        resolve(`resolve from server${msg}`);
    }
    else{
        reject(`reject from server${msg}`);
    }
})
}
nameLength("padopatel").then((msg)=>console.log("the result is :",msg))