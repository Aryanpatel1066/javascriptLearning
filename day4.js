//practice some object related question in day 4

//1) Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

// Your code here
const person = {
    name:"aryan",
    age:30
};
person.age=35;
console.log(person.age) // Output: 35

//2)Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

//Your ES6 code here

const car1 = { make: 'Porsche', model: '911', horsepower: 450 }
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 }

const isSportsCar = ({horsepower})=>horsepower>=300
console.log(isSportsCar(car1)) // true
console.log(isSportsCar(car2)) // false

//3 Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.

// Your ES6 code here

const person1 = { name: 'Ajay', age: 20 }
const isEligible = ({age},num)=>age+num>21
console.log(isEligible(person1, 1)) // false
console.log(isEligible(person1, 2)) // true

//4Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000)

// Your ES6 code here

const blog1 = {
    title: 'How to Learn JavaScript',
    author: 'John Doe',
    views: 1430,
  }
  const blog2 = {
    title: '10 Reasons to Start a Blog',
    author: 'Jane Smith',
    views: 500,
  }
const getViews = ({views})=>views>1000

  console.log(getViews(blog1)) // true
  console.log(getViews(blog2)) // false

  //5Swap the values of two variables using array destructuring.
  let a = 1;
  let b = 2;
  
  // Swap values using array destructuring
  [a, b] = [b, a];
  
  console.log(a); // 2
  console.log(b); // 1
  

  //6 Convert this function into ES6 with least amount of characters.

//   function add(a = 30, b = 0) {
//     return a + b
//   }
  
  const add = (a=30,b=0)=>a+b
  console.log(add(2, 3));

  //7 Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

// Your ES6 function here

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
 const combineObjects = (obj1,obj2)=>{
    let newObj = {...obj1,...obj2};
    return newObj;
 }
const combinedObj = combineObjects(obj1, obj2)
console.log(combinedObj)
// Expected Output: {a: 1, b: 2, c: 3, d: 4}

 

//8 Convert the function getData, into an ES6 function with last amount of characters.

// function getData(person) {
//     const name = person.name
//     const address = person.address.city
//     console.log(name) // John Doe
//     console.log(address) // New York
//   }
  
  const person6 = {
    name: 'John Doe',
    address: {
      city: 'New York',
      state: 'NY',
    },
  }
  const getData = ({name,address:{city}})=>{
     console.log(city);
     console.log(name)
  }
  getData(person6)




  //9 Write a function that takes a string as input and returns the string in all uppercase letters.

// Youe ES6 code here
const stringToUpperCase = str => str.toUpperCase();
console.log(stringToUpperCase('hello')) // "HELLO"

//10 Write a function that takes two strings as input and concatenates them together.

// Your ES6 code here
const concatenateStrings =(str1,str2)=>str1+str2;
console.log(concatenateStrings('hello', 'world')) // "helloworld"

//11 Write a function that takes an array and returns the last element in the array.

// Your ES6 code here
const lastElement = num => num[num.length-1]
console.log(lastElement([1, 2, 3, 4, 5])) // 5

//12 Write a function that takes an array and returns the first element of the array.

// Your ES6 code here
const firstElement = num => num[0];
console.log(firstElement([1, 2, 3, 4, 5])) // 1

//13 Write a function that takes an array and a number and returns the sum of first element and the number.

// Your ES6 code here
//  console.log(sumFirstElement([1, 2, 3], 5)) // 6

 //14 Write a function that takes an array and returns the sum of first and last element.

// Your ES6 code here
const sumFirstAndLast = arr => arr[0]+arr[arr.length-1]
console.log(sumFirstAndLast([1, 2, 3, 4, 8])) // 9

//Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

// Your ES6 code here

const person11 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person22 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
const personInfo = ({name,age})=>`${name} is ${age} years old `
console.log(personInfo(person1)) // Expected output: "John is 25 years old."
console.log(personInfo(person22)) // Expected output: "Jane is 45 years old."


/// ************** set 3 **************///

///1 Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

// Your ES6 code here

const items = ['apple', 'banana', 'orange'];
const formatArray = fruitArr =>`The array has ${fruitArr.length} items, and the first items is ${fruitArr[0]}, and the last item is ${fruitArr[fruitArr.length -1]}`
const message = formatArray(items)
console.log(message)
// The array has 3 items, and the first item is "apple", and the last item is "orange".

//2Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

// Your ES6 code here

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  }
  const formatProduct = ({name,price,inStock})=>inStock?`${name} costs INR ${price} and is in stock`:`the ${name} is out of stock`
  const message2 = formatProduct(product);
  
  console.log(message2)
  // Socks costs INR 249 and is in stock.

//   //3Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

// // Your ES6 code here
// const findPerson = ({name},name)=>name === name ? "found":"nop"
//  console.log(
//     findPerson(
//       [
//         { name: 'Amay', age: 25 },
//         { name: 'Akhil', age: 25 },
//       ],
//       'Akhil',
//     ),
//   )

// 4 Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// Your ES6 code here

const pickFirstAndSecond =([first,second])=>({first,second})

console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(['red', 'blue', 'green']))
// {first: 'red', second: 'blue'}