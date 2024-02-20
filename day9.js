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

//13) Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const peoples = [
  { name: 'Raj', age: 28 },
  { name: 'Swapnil', age: 42 },
  { name: 'Anushka', age: 35 }
];

// Your code here
const peopleNames = peopleObj => peopleObj.map(({name})=>name)
const names = peopleNames(peoples);
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']

//14)Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers5 = [1, 2, 3, 4];
// Your code here
const multipleByFiveFunc = numArr => numArr.map((el)=>el*5);
const multiplyByFive = multipleByFiveFunc(numbers5);
console.log(multiplyByFive); // Output: [5, 10, 15, 20]

//15 Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

// Your code here
const employeeMsg = empObj => empObj.map(({name,dept})=>`'Hi ${name} we are glad to have you as a ${dept}'`)
const greetEmployeeMessages = employeeMsg(employeeData);
console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']

//16 Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const book = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
];

// Your code here
const getBookTitles = bookObj => bookObj.map(({title})=>title)
const titles = getBookTitles(book);
console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//16 Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here
const studNameLetterA = studObj => studObj.filter((name)=>name.charAt(0)=== "A")
const studentNames = studNameLetterA(studentName);
console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"];

//17Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
  {prodName: "Dairy Milk", price: 10},
  {prodName: "Dairy Milk Silk", price: 70},
  {prodName: "Five Star", price: 20},
  {prodName: "Mars", price: 50}
]
// Your code here
const getProducts = (productObj,price) => productObj.filter((pl)=>pl.price > price)
console.log(getProducts(productData, 40))
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}];

//18 Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.
const number = [1, 2, 3, 21, 14, 7];
// Your code here
const divideTo7 = arr => arr.find((el)=>el % 7 === 0)
const isDivisibleBy7 = divideTo7(number);
console.log(isDivisibleBy7)
// Output: 21

//19 Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const name = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]
// Your code here
const isGt8 = arr => arr.length > 8
const isNamesGreaterThan8 = arrName => arrName.find(isGt8);

console.log(isNamesGreaterThan8(name));
// Output: "Geetanjali"

//20 Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const student = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

// Your code here
const findStudentWithGradeA = studObj => studObj.find(({grade})=>grade === "A")
const studentWithGradeA = findStudentWithGradeA(student);
console.log(studentWithGradeA); 
// Output: { name: "Mary", grade: "A" }

//21 Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

const studenta = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];

// Your code here
const findStudent = studObj => studObj.find(({grade,scholarship})=>grade === "A" && scholarship === true);
const studentvar = findStudent(studenta);
console.log(studentvar); 
// Output: { name: "Mary", grade: "B", scholarship: true }

//22 Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const studentp = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

// Your code here
const findStudent2= studObj => studObj.find(({grade,scholarship})=>grade === "B" && scholarship === true);
const studentvar2 = findStudent2(studentp);
console.log(studentvar2); 
// Output: { name: "Sarah", grade: "B", scholarship: true }

//23 Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough)

const bollywoodMovies = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

// Your code here
const getBestOldBollywoodMovies = movieObj => movieObj.filter(({title,rating,year})=>{
  if(year<1990 && rating >=8.0){
    return title;
  }
})
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']

//24 Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2010 },
  { make: 'Honda', model: 'Civic', year: 2012 },
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Ford', model: 'Mustang', year: 2018 },
]

// Your code here
const findToyotaCar = carObj =>carObj.filter(({make,year})=>make === "Toyota" && year > 2010)
const toyotaCar = findToyotaCar(cars)
console.log(toyotaCar)
// Output: { make: "Toyota", model: "Camry", year: 2015 }