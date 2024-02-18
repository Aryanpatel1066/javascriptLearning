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

//4 Write a function that takes any number of arguments using the rest operator and calculates their sum.

const sumOfElement = (...numbers)=>{
    let sum = numbers.reduce((total,numbers)=>total+numbers,0);
    return sum
}
console.log(sumOfElement(10,20,-9))

//5 Create a function that accepts an array of numbers and uses the rest operator to calculate their sum.

const myArr = [10,20,30];
const sumOfArray = ([...numbers])=>{
    let sum = numbers.reduce((total,numbers)=>total+numbers,0);
    return sum;
};
console.log(sumOfArray(myArr));

//6Write a function that takes any number of arguments and returns the maximum value using the rest operator.

const findMax = (...numbers)=>{
    let max = numbers.reduce((max,numbers)=>max > numbers);
    return max;
};
 
console.log(findMax(10,20,30))

//7 Write a function that clones an array using the spread operator.

const oldArr = [10,20,44];
const newArr = [...oldArr,88];
console.log(newArr)

// solve some question on spread operator

//8 Write a function that takes two arrays and uses the spread operator to concatenate them.

const twoArr = (arr1,arr2)=>{
  const newArr = [...arr1,...arr2];
  return newArr;
}
const a = [10,30];
const b = [50,50]
console.log(twoArr(a,b))

//9 Create a function that merges two objects using the spread operator.

const obj1 = {
    name:"aary",
    age:17
}
const obj2 = {
    name:'ldrp itr',
    city:"green city gandhinagar"
}
const takeTwoObj = (obj1,obj2)=>{
    const newObj = {...obj1,...obj2};
    return newObj;
}
const rs = takeTwoObj(obj1,obj2);
console.log(rs);