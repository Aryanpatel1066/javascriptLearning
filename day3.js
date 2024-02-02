// hear first of all revise some arrow function 

// first arrow function only one parameter

const hello = str => str
console.log(hello("pado don"));

// how to return object

const secondFunc = arg =>({value:11});
console.log(secondFunc(22));

const createPerson = (name, age) => ({ name, age });
const person = createPerson("John", 25);
console.log(person);

const createPerson2 = (name,age)=>({name:name,age:age});
const person2 = createPerson2("aryan",11);
console.log(person2)


//solve some question using arrow function 

//question:1 Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).

// Your ES6 code here
const isEligibleToVote = age =>age >=18 ?"Eligible to vote":"Not Eligible to vote"
console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote

//question:2 Write a function that takes two numbers as input and determines which one is greater.

// Your ES6 code here
const isGreater = (num1,num2) =>num1>num2?`${num1} is greter than ${num2}`:`${num2} is greter than ${num1}`
console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5

//question: 3 Write a function that takes a number as input and determines if it is positive or negative.

// Your ES6 code here
const checkNum = num => num>0 ? "positive number":"negative number" 
console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number

//4 Write a function that takes a number as input and determines if it is even or odd.

// Your ES6 code here
const isEvenOdd = num => num % 2 != 0?"odd number":"even number"
console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number

//5 Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// Your ES6 code here
const checkForAlphabetA = str =>str.includes('a')||str.includes('A')?"includes a":"does not include a"

console.log(checkForAlphabetA('Tanay')) // Includes a
console.log(checkForAlphabetA('Jeep')) // Does not include a
console.log(checkForAlphabetA('Jane')) // Includes a

//6 Write a function that takes a string as input and determines if it is longer than 5 characters.

// Your ES6 code here
const checkLength = str => str.length>=5 ?"more than 5 characters":"less than 5 characters"
console.log(checkLength('Programming')) // more than 5 characters
console.log(checkLength('Jeep')) // less than 5 characters

//7Write a function that takes a number as input and determines if it is between 1 and 10.

// Your ES6 Code here
const isBetweenOneAndTen = num => num <=10 && num >=1
console.log(isBetweenOneAndTen(5)) // true
console.log(isBetweenOneAndTen(11)) // false

//8 Write a function that takes a string as input and determines if it contains the word "hello".

// Your ES6 code here
const isHelloPresent = str => str.includes("Hello")
console.log(isHelloPresent('Hello World')) // true
console.log(isHelloPresent('World')) // false

//9Write a function that takes a number as input and determines if it is a multiple of 3.

// Your ES6 code here
const isMultipleOfThree = num => num % 3 == 0
console.log(isMultipleOfThree(5)) // false
console.log(isMultipleOfThree(9)) // true

//10 Write a function which takes in a number as input and returns it after multiplying by 10.

// Your ES6 code here
const multiplyByTen = num => num*10;
console.log(multiplyByTen(20)) // 200
console.log(multiplyByTen(40)) // 400

//11 Console individual values of the product object using object destructuring.

const product = {
    title: 'iPhone',
    price: 5999,
    description: 'The iPhone is a smartphone developed by Apple',
  }
  
  // Your ES6 code here
  const {title,price,description}=product
  console.log(title) // iPhone
  console.log(price) // 5999
  console.log(description) // The iPhone is a smartphone developed by Apple

  //12 Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

// Your ES6 code here
const book = {
    title:"the code",
    author:"aryan",
    pages:"1111"
}
const getBookDetails = ({pages}) =>pages>100
console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below

//14 Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

// Your ES6 code here
const person5 ={
name:"Amit",
age:25,
occupation:"Software Engineer"
};

const changeOccupation = (obj,str) =>{
    obj.occupation=str;
return obj;
}
 console.log(person5) // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person5, 'Product Manager')
console.log(person5) // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

//14 Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3]
// Your ES6 code here
const [a,b,c]=numbers
console.log(a) // logs 1 to the console
console.log(b) // logs 2 to the console
console.log(c) // logs 3 to the console

//15 Convert the given function into ES6 with least amount of characters.



// function defaultParamsFunc(a, b, c) {
//     if (c === undefined) {
//       c = 4
//     }
//     return a * b * c
//   }

  const defaultParamsFunc =(a,b,c=4)=>a*b*c;
  console.log(defaultParamsFunc(3, 1)) // 12
  console.log(defaultParamsFunc(3, 10)) // 120