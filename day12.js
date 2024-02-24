// today we talk about async-await

// console.log("first line");
//  async function myFunc(){
//     let data = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("hello")},3000)
//     })
//     let rs = await data ;
//     console.log(rs)
//  }
//  myFunc();
// console.log("third line")

  // 1)

//   Write an asynchronous function that uses setTimeout to log "Async function complete!" after 4 seconds.

// async function myFunc(){
//     setTimeout(()=>{
//         console.log("Async function complete!");
//     },4000);
// }
// myFunc();

//2 Convert a promise-based function into an asynchronous function using async/await. For example, create an async function that fetches data from an API using fetch.
// async function FetchApi (url){
//     try{
//      let result = await fetch(url);
//      if(url === "https://example.com"){
//        setTimeout(()=>{
//         console.log("succes",result);
//        })
//      }
     
//     }
//     catch(err){
//         console.error("error",err);
//         }
// }
// FetchApi("https://example.com")

//3 Write an async function that handles errors. For example, create an async function that simulates fetching data and handles errors if the fetch fails.
// async function isEven(num){
//  try{
//       if(num % 2 === 0){
//         console.log("solve")
//       }
//       else{
//         throw new Error("num is odd")
//       }
//  }
//  catch(err){
//     console.log("catch block");
//  }
// }
// isEven(1);

// solve some neog question

//1 Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedGreeting = ()=>{
//     setTimeout(()=>console.log("wati for 2 second ..."),2000)
// }
// delayedGreeting();

//2 Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedAddition = (num1,num2) => {
//     setTimeout(()=>{
//        console.log(num1+num2);
//     },4000);
// }
//  delayedAddition(10,20);

 //3 Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here
// const delayedAlert = (msg,timer)=>{
//     setTimeout(()=>{
//         alert(msg)
//     },timer)
// }
// delayedAlert('Hello, world!', 5000);
// Should display an alert box with the message, Hello, world!

//4 Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here

// const delayedLoop = num =>{
//     for(let i = 0;i< num;i++){
//         setTimeout(()=>{
//             console.log("Hello")
//         },1000*(i+1))
//     }
// }

// delayedLoop(3);
// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second

//5 Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

// const fakeFetch = (msg, shouldSucceed) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldSucceed) {
//           resolve(`message from server: ${msg}`);
//         }
//         reject(`error from server: ${msg}`);
//       }, 3000);
//     });
//   };
  
//   // Your Code here
//   fakeFetch("pado pate the web dev",false).then((msg)=>{
//     console.log("hii",msg)
//   }).catch((err)=>{
//     console.log("error form severt",err)
//   })
  // Hi -- after 3 seconds

  //6 
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlist") {
          reject({
            status: 404,
          message: "Items list not found."
        });
      } else {
          resolve({
            status: 200,
          data: {
              message: "Success",
            data: [
                { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 }
            ]
          }
        });
      }
    }, 2000);
  });
  }
  
  // Your Code here (Solution Given)
  const displayOutput = document.querySelector("#output");
  
  fakeFetch("https://example.com/api/itemlist")
    .then((response) => console.log(response))
    .catch((error) => {
      if (error.status === 404) {
        displayOutput.textContent =
          "The data you are looking for, does not exist.";
      }
    });
  
  // Output on the DOM should be: 
  // The data you are looking for, does not exist.

  