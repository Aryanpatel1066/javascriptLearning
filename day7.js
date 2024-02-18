//rest and spread operator
//rest
const mulitpleArgument =(...para) =>{
    console.log(para)
}
mulitpleArgument(10,2,"dd")
 

//1 Write a function called average that takes any number of arguments and returns the average of those numbers.
 
const calculateAvg = (...numbers) =>{
    const sum = numbers.reduce((total,num)=>total+num,0);
    const average = sum / numbers.length;
    return average;
}
let ans = calculateAvg(10,20);
console.log(ans)
console.log(calculateAvg(20,20,20));

//2 Given an array of student names, use the rest operator to separate the first student from the rest of the students.

const studentNames = ["xyz","abc","pqr","wxyz"];

const destractFirstName = ([a,...rest])=>{
    console.log(`first name of student :${a}`);
    console.log(`rest of the student ${rest}`)
}
 destractFirstName(studentNames);

 //3 Given two objects, person and address, create a new object called fullProfile by merging both objects using the spread operator.

const person = {
    name:"aryan",
    age:19
}
const address = {
    village:'sundarpur',
    city:'vijapur'
}
// const fullProfile = (personObj,addressObj)=>{
//   let newObj = {...personObj,...addressObj};
//   return newObj;
// }
// console.log(person,address)
const fullProfile = {...person,...address};
console.log(fullProfile)