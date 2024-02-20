// here 20/2 today we solve the practice question on filter and find


//1 Given an array, return an array with only odd numbers in it.

const numbers = [3, 5, 6, 1, 2];

const oddNums = numbers.filter((nums)=>nums%2 !==0);
console.log(oddNums);

//2 Given an array, return an array with only numbers divisible by 10.

const arr = [5, 20, 15, 40, 3, 30, 11]

const divisibleBy10 = arr.filter((nums)=>nums % 10 === 0)
console.log(divisibleBy10);

//3 Write an ES6 function that takes an array, and returns the first even number in the array.
const numberseven = [5, 12, 8, 13, 44]

const firstEvenNumber = arr => arr.find((num)=>num%2==0);
const ans = firstEvenNumber(numberseven);
console.log(ans);

//4 Given an array of objects, find the object with name “clips”.


const inventory = [
    { name: 'socks', quantity: 12 },
    { name: 'shirts', quantity: 10 },
    { name: 'clips', quantity: 5 },
  ]

  const nameClips = inventory.find(({name})=>name === 'clips');
  console.log(nameClips)

  //5 Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// Your ES6 code here

const numbersdivisible = [1, 2, 30, 4, 15]
const isDivisibleBy3and5 = arr => arr.filter((num)=>num % 3=== 0 || num % 10 === 0)
console.log(isDivisibleBy3and5(numbersdivisible))
// Output: [30, 15];

//6 Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

// Your ES6 code here

const people = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 },
  ]
  const filterByAge = obj => obj.filter(({age})=>age > 30);
  console.log(filterByAge(people))
  // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

  //7 Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

// Your ES6 code here

const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 },
  ]
  const filterByScore = studObj => studObj.filter(({score})=> score > 80)
  console.log(filterByScore(students))
  // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

  //8 Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

// Your ES6 code here

const peopleIndore70 = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
    { name: 'Venki', age: 80, city: 'Bangalore' },
  ];
  const filterByCityAndAge = peopleObj => peopleObj.filter(({age,city})=> age > 70 && city === "Indore")
  const filteredPeople = filterByCityAndAge(peopleIndore70)
  console.log(filteredPeople)
  // Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }];

  //11 Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

// Your ES6 code here

const books = [
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      genre: 'Science Fiction',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
    },
    { title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
  ]
  const filterByGenre = obj => obj.filter(({genre})=>genre === "Science Fiction")
  const filteredBooks = filterByGenre(books, 'Science Fiction')
  console.log(filteredBooks)
  // Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

  //12 Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// Your ES6 code here

const employees = [
  { name: 'Abhay', age: 25, salary: 20000 },
  { name: 'Joice', age: 30, salary: 35000 },
  { name: 'Reena', age: 35, salary: 15000 },
  { name: 'Jeena', age: 40, salary: 50000 },
]
const filterBySalary = empObj =>empObj.filter(({age,salary})=>(age>25)&& (salary > 22000))
const filteredEmployees = filterBySalary(employees, 22000, 25)
console.log(filteredEmployees)
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]

