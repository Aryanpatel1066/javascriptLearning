//1 Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

// Your ES6 code here

const items = ['apple', 'banana', 'orange'];
const formatArray = arrayString=>{
const lenghthElement = arrayString.length;
const firstElement =   arrayString[0];
const lastElement =    arrayString[lenghthElement-1];


return `The array has ${lenghthElement} items, and the first item is ${firstElement}, and the last item is ${lastElement}`
}
const message = formatArray(items)
console.log(message)
// The array has 3 items, and the first item is "apple", and the last item is "orange".

//2 Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

// Your ES6 code here

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  }
  
  const formatProduct = ({name,price,inStock}) => inStock ? `${name} costs INR ${price} and is in stock`:``
  const message2 = formatProduct(product)
  console.log(message2)
  // Socks costs INR 249 and is in stock.

  //3 Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

  // Your ES6 code here
const findPerson = ([name]) =>
console.log(
    findPerson(
      [
        { name: 'Amay', age: 25 },
        { name: 'Akhil', age: 25 },
      ],
      'Akhil',
    ),
  )

  //4 Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// Your ES6 code here
const pickFirstAndSecond = ([first,last])=>{
    return {first,last}
}
console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(['red', 'blue', 'green']))
// {first: 'red', second: 'blue'}

//5 Convert the following code to ES6+ syntax with minimum number of characters.

function startsWithA2(str) {
    if (str.charAt(0) === 'A') {
      return true
    } else {
      return false
    }
  }
  const startsWithA = str => str.charAt(0)==='A' 
  
  console.log(startsWithA('Akshita'))
  // true
  console.log(startsWithA('Jeena'))
  // false

  //6 Write an ES6 function to return only the first character of the given array.

// Your ES6 code here
const printFirstCharacter = (arr)=> arr[0]
console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1

//7 Write a function to return the last 5 characters as an array from the given array.

// Your ES6 code here

// console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]

