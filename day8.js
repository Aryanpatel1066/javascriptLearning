//1 Given the nested array [[1, 2], [3, 4], [5, 6]], use destructuring to assign the values 2, 4, and 6 to variables x, y, and z.

const arr = [[1,2],[3,4],[5,6]];
const [[,x],[,y],[,z]] = arr;
console.log(x,y,z) 

//2 Given the object { name: 'John', age: 25, city: 'New York' }, use destructuring to assign the values to variables name, age, and city.
// const person = {
//     name:'John',
//     age:25,
//     city:'New York'
// }
// const {name,age,city}=person;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(person.name);

//3Given the object { title: 'Developer', salary: 50000 }, use destructuring to assign the values to variables position and income. If the position is not provided, set a default value of 'Employee'.
// const emp ={
//     title:"devlope",
//     salary:50000
// };
// const {title:position='employee',salary:income}=emp;
// console.log(position);
// console.log(income);


//4 Given the nested object { person: { name: 'Alice', age: 30 }, job: { title: 'Engineer', salary: 70000 } }, use destructuring to assign the values Alice, 30, and 70000 to variables name, age, and salary.

const stud={
     person5: { name: 'Alice', age: 30 },
     job5: { title: 'Engineer', salary: 70000 }
     }
     const {person5:{name,age},job5:{salary}}=stud;
     console.log(name);
     console.log(age)
     console.log(salary);
 
//5 Write a function that takes an object parameter representing a person with firstName and lastName. Use destructuring to extract these values and return a formatted string: "Hello, [firstName] [lastName]!".

const firstLastName = ({firstname,lastname})=> `Hello, ${firstname} ${lastname}!`
const fp = {
    firstname:"pado",
    lastname:"patel"
}
console.log(firstLastName(fp))

//6Take an array with 5 colours. Create another array by adding 2 more colours to it.

const colors = ['red','blue','green','pink','orange'];
const anotherColors = [...colors,'megenda','purple'];
console.log(anotherColors,);

// 7 Take an object with your mother’s name and your age. Now create an object for your sibling by age difference.

const mother = {name:'abc',age:40}
const sibling = {...mother,age:mother.age-20}
console.log(sibling)

//8 Write a function birthday() to take a person’s name and age in an object and then increase the age by 1. Return the updated object.

const person = {
    name:'pado',
    age:18
}
const birthday = (person)=>({...person,age:person.age+1});
console.log(birthday(person))

//9 Write an ES6 function increaseStock() to take a products’s name and quantity in an object and then increase the quantity by 5.

const product = {
    name:'apple',
    quantity:11
};
const increaseStock = product =>({...product,quantity:product.quantity+5})
const ans = increaseStock (product);;
console.log(ans);

//10 Given an array of numbers, return a new array with square root of each number in it.

const mynum = [10,20,30,3,4,5];
const result = mynum.map((arr)=>Math.sqrt(arr));
console.log(result)

//lest first understanding map function 

//Yes, that's correct. The map function in JavaScript is a higher-order function that takes a callback function as its argument. This callback function is applied to each element of the array, and a new array is created with the results.


//11 Write an ES6 function that takes an array of strings and returns an array with the length of each string using the map method.

const mystr = ['heello','aryan','abc'];
// const lengthOfStr = mystr.map((str)=>str.length);
// console.log(lengthOfStr)
// const lengthstr = str =>str.length;
// const strLength = mystr.map(lengthstr);
// console.log(strLength) 

//12 Given an array of strings, use the map function to create a new array where each string is converted to uppercase.

const words = ['apple', 'banana', 'cherry'];
// Expected result: ['APPLE', 'BANANA', 'CHERRY']
const upperWord = words.map((p)=>p.toUpperCase());
console.log(upperWord);

 //13 Given an array of rectangle objects with width and height properties, use the map function to create a new array containing the area of each rectangle.

 const rectangles = [
    { width: 5, height: 10 },
    { width: 8, height: 2 },
    { width: 3, height: 7 }
  ];
  // Expected result: [50, 16, 21]
  const areaOfRectangle = rectangles.map(({width,height})=>width*height);
  console.log(areaOfRectangle);

  //14 Convert temperatures from Celsius to Fahrenheit:
// F = (C * 9/5) + 32
const celsiusTemps = [0, 20, 25, 37];
// Expected result: [32, 68, 77, 98.6]

const celsiusToFaren = celsiusTemps.map((arr)=>{
    let F = (arr * 9/5)+32;
    return F;
 })
console.log(celsiusToFaren)

//15 Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// Your ES6 function here
const numbers = [1, 2, 3, 4, 5];
// const incrementNumbers = nums=>{
//     let ans = nums.map((nums)=>nums+3);
//     return ans;
// }
const incrementNumbers = nums => nums.map((num)=>num+3);
console.log(incrementNumbers(numbers))
// Output: [4, 5, 6, 7, 8]

//16 Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

// Your ES6 function here

const myArray = ['apple', 'banana', 'cherry'];
const capitalizeArray = arr => arr.map((arr)=>arr.toUpperCase())
console.log(capitalizeArray(myArray))
// Output: ["APPLE", "BANANA", "CHERRY"]

//17 Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here

const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 },
  ];
  const getAges = obj => obj.map(({age})=>age)
  const ages = getAges(people)
  console.log(ages) // Output: [25, 24, 29]

  //18 Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// Your ES6 function here

const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 },
  ]
  const getProductNamesInLowerCase = obj => obj.map(({name})=>name.toLowerCase())
  console.log(getProductNamesInLowerCase(products))
  Output: ["lip balm", "perfume", "socks"];

  //19 Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// Your ES6 function here

const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 },
  ]
//   const cityName = obj => obj.name;
//   const getCityNames = cityObj => cityObj.map(cityName)
const getCityNames = cityObj => cityObj.map(({name})=>name)
  console.log(getCityNames(cities))
  // Output: ["New York", "Los Angeles", "Bangalore"]

  // Your ES6 function here

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']
const filterLongStrings = strArr => strArr.filter((str)=>str.length >5)
console.log(filterLongStrings(fruits))
// Output: ["banana", "cherry", "watermelon", "pineapple"]