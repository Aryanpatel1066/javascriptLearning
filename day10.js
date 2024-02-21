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

   