//day 10

//1) Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
  ]
  
  // Your code here
  const findElectronicsProduct = productObj => productObj.find(({category})=>category === "electronics")
  const electronicsProduct = findElectronicsProduct(products)
  console.log(electronicsProduct)
  // Output: { name: "iPad", price: 799, category: "electronics" }

  //2 Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

  const products2 = [
    { name: 'Toothbrush', price: 29, category: 'health' },
    { name: 'Coffee Maker', price: 99, category: 'home' },
    { name: 'iPad', price: 799, category: 'electronics' },
    { name: 'Smartwatch', price: 199, category: 'electronics' },
  ]
  
  // Your code here
  const getAllElectronicProducts = productObj => productObj.filter(({category})=>category === "electronics")
  const electronicProducts = getAllElectronicProducts(products)
  console.log(electronicProducts)
  // Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

  //3Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

  const students = [
    { name: 'Alice', age: 16, grade: 90 },
    { name: 'Bob', age: 17, grade: 80 },
    { name: 'Charlie', age: 15, grade: 95 },
    { name: 'David', age: 16, grade: 85 },
  ]
  // Your code here
  const filterStudentsByGrade = (studObj,marks)=>studObj.filter(({grade})=>grade > marks)
  const highGradeStudents = filterStudentsByGrade(students, 85)
  console.log(highGradeStudents)
  // Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

  //4 Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

  const books = [
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      pageCount: 1178,
    },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281 },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      pageCount: 193,
    },
    {
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      pageCount: 662,
    },
  ]
  
  // Your code here
  const findBookWithMoreThan500Pages = bookObj => bookObj.find(({pageCount})=> pageCount > 500)
  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books)
  console.log(bookWithMoreThan500Pages)
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

  //5 Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

  const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
  ]
  // Your code here
  const getMaleCustomers = customersObj => customersObj.filter(({gender})=>gender === "Male")
  const maleCustomers = getMaleCustomers(customers)
  console.log(maleCustomers)
  // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]

  //8 Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

  const games = [
    {
      title: 'The Witcher 3: Wild Hunt',
      developer: 'CD Projekt Red',
      genre: 'RPG',
    },
    {
      title: 'Grand Theft Auto V',
      developer: 'Rockstar North',
      genre: 'Action',
    },
    { title: 'Portal 2', developer: 'Valve Corporation', genre: 'Puzzle' },
    {
      title: 'The Legend of Zelda: Breath of the Wild',
      developer: 'Nintendo',
      genre: 'Adventure',
    },
  ]
  // Your code here
  const filterByGenre = (gameObj,genres)=> gameObj.filter(({genre})=>genre === genres)
  const filteredGames = filterByGenre(games, 'RPG')
  console.log(filteredGames)
  // Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]

  //9 Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.

  const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2012 },
    { make: 'Toyota', model: 'Camry', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
  ]
  
  // Your code here
  const getCarModel = carObj =>carObj.filter(({year})=>year>2012).map(({model})=>model)
  const carModels = getCarModel(cars)
  console.log(carModels)
  // Output: ["Camry", "Mustang"]

  //10 Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

  const books2 = [
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      pageCount: 1178,
    },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281 },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      pageCount: 193,
    },
    {
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      pageCount: 662,
    },
  ]
  
  // Your code here
  const getTitlesWithMoreThan700Pages = bookObj => bookObj.filter(({pageCount})=>pageCount > 700).map((bookObj)=>bookObj.title)
  const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books)
  console.log(booksWithMoreThan700Pages)
  // Output: ["The Lord of the Rings"]

   
  // what is reduce function in js
//   In JavaScript, the reduce function is an array method that is used to reduce an array to a single value. It iterates over each element of the array and applies a callback function to accumulate or combine the elements into a final result. The reduce function takes two main parameters: the callback function and an optional initial value.
//   array: The array on which the reduce method is called.
//   callback: A function that is called once for each element in the array. It takes four parameters: accumulator, current element, current index, and the array itself.
//   accumulator: The accumulated result of the callback function.
//   current element: The current element being processed in the array.
//   current index: The index of the current element being processed.
//   array: The array on which the reduce method is called.
//   initialValue: (Optional) A value that is used as the initial value of the accumulator in the first call to the callback function. If omitted, the first element of the array is used as the initial accumulator value.
//   Here's a simple example that uses the reduce function to calculate the sum of an array:
  
//   javascript
//   Copy code
//   const numbers = [1, 2, 3, 4, 5];
  
//   const sum = numbers.reduce((accumulator, current) => {
//     return accumulator + current;
//   }, 0);
  
//   console.log(sum); // Output: 15
//   In this example, the reduce function starts with an initial value of 0 for the accumulator. The callback function then adds each element of the array to the accumulator, resulting in the sum of all elements (1 + 2 + 3 + 4 + 5 = 15).
  
//   You can use the reduce function for various operations, such as finding the maximum or minimum value, counting occurrences, or transforming data in an array. The key is to provide an appropriate callback function that defines how the reduction should occur.
    
//1 Given an array, find the sum of all numbers in the array using reduce() method.

const array = [1, 2, 3, 4];
const sumOfArr= arr => arr.reduce((sum,cur)=>sum+cur,0)
const rs = sumOfArr(array);
console.log(rs)

//2 Given an array, find the sum of all odd numbers in the array using reduce() method.

const array2 = [1, 2, 3, 4, 5, 6, 7]
const sumOfOdd = arr => arr.reduce((sum,currentElement)=>currentElement % 2 !== 0 ? sum + currentElement:sum,0);
console.log(sumOfOdd(array2))

//3 Write a function that takes an array of objects representing books with properties title, author, and pages, and returns the total number of pages of all the books using the reduce function.

const books3 = [
    { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
  ]
  
   const getTotalPages = bookObj => bookObj.reduce((totalPage,bookPage)=>totalPage + bookPage.pages,0)
  console.log(getTotalPages(books3)) // Output: 658

  //4 Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

  const numbers = [12, 23, 4, 2, 11, 21]
  // Your code here
  const sumOfEvenNumbers = numArr => numArr.reduce((totalSum,currentElement)=>currentElement % 2 === 0 ? totalSum + currentElement:totalSum,0)
  console.log(sumOfEvenNumbers(numbers))
  // Output: 18

  //5 Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

  const students3 = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ]
  
  // Your code here
  const getAverageScore = studObj =>studObj.reduce((totalScore,sum)=>totalScore+sum.score,0)/studObj.length
  console.log(getAverageScore(students3))
  // Output: 82.5

  //6Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

  const products3 = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
  ]
  
  // Your code here
  const getTotalCost = productObj => productObj.reduce((totalPrice,product)=>totalPrice + product.price*product.quantity,0) 
  console.log(getTotalCost(products3))
  // Output: 150


//7 Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!']
// Your code here
const concatenateStrings = strArr => strArr.reduce((totalStr,str)=>totalStr + str)
console.log(concatenateStrings(strings))
// Output: "Hello world!"

//8Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers3 = [10, 5, 8, 3, 6]

// Your code here
getMinimumNumber = numArr => numArr.reduce((minNum,num)=>minNum < num ? minNum : num,numArr[0])
console.log(getMinimumNumber(numbers3))
// Output: 3


//9 Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings2 = ['apple', 'banana', 'cherry', 'date', 'blueberry']
// Your code here
const totalLength = str => str.reduce((totalStr,currentStr)=>totalStr + currentStr.length,0)
console.log(totalLength(strings2))
// Output: 30

//10 Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers4 = [1, 2, 3, 4, 5]
// Your code here
const sumSquares = numArr => numArr.reduce((totalSqure,currentSqure)=>totalSqure+currentSqure*currentSqure,0);
console.log(sumSquares(numbers4))
// Output: 55

//11 Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ]
  // Your code here
  const totalValue = itemObj => itemObj.reduce((totalPrice,{price})=>totalPrice + price,0)
  console.log(totalValue(items))
  // Output: 60

  //12 Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here
const myName = ['aryan'," ",'patel'];
const concatStrings2 = strArr => strArr.reduce((totalStr,str)=>totalStr+str);
console.log(concatStrings2(myName));
console.log(concatStrings2(['this', 'is', 'fun'])) // Output: 'thisisfun'

//13 Write an ES6 function to multiply and return all the elements of a given array.

const numbers5 = [1, 2, 3, 4, 5]
// Your code here
const product = numArr => numArr.reduce((totalAns,arr)=>totalAns * arr,1)
console.log(product(numbers5))
// Output: 120

//14 Write an ES6 function that takes an array of strings and returns the longest string.

const strings7 = ['neogcamp', 'Haule Haule', 'code', 'Batman', 'Awesome'];

const longestString = strArr => strArr.reduce((longestStr, currentStr) => longestStr.length > currentStr.length ? longestStr : currentStr, strArr[0]);

console.log(longestString(strings7));


//15 Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
    { name: 'Jeena', age: 25 },
    { name: 'Priya', age: 30 },
    { name: 'Naina', age: 45 },
  ]
  // Your code here
  const oldestPersonName = peopleObj => peopleObj.reduce((oldAge,newage)=> oldAge.age > newage.age ? oldAge : newage,people[0])


  console.log(oldestPersonName(people))
  // Output: 'Naina'

  //now we learn about the call back 

  // const nameLengthEvenOrOdd = (name,isOdd,isEven) => name.length % 2 !== 0 ? isOdd():isEven;
  
  //  nameLengthEvenOrOdd("pado",()=>console.log("odd"),()=>console.log("even"));

  const nameLengthEvenOrOdd = (name, isOdd, isEven) => name.length % 2 !== 0 ? isOdd() : isEven();

nameLengthEvenOrOdd("pado", () => console.log("odd"), () => console.log("even"));
