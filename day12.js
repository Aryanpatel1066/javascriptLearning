// today we talk about async-await

console.log("first line");
 async function myFunc(){
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("hello")},3000)
    })
    let rs = await data ;
    console.log(rs)
 }
 myFunc();
console.log("third line")

  