//q5 Convert the following code to ES6+ syntax with minimum number of characters.

// function startsWithA(str) {
//     if (str.charAt(0) === 'A') {
//       return true
//     } else {
//       return false
//     }
//   }
  const startsWithA = name =>name.charAt(0)==="A"
  console.log(startsWithA('Akshita'))
  // true
  console.log(startsWithA('Jeena'))

  // false

  //6 Create a function which takes a product object and returns a sentence about the product using ES6 features.

// Your ES6 code here

const product = {
    name: 'Apple MacBook Air 2020',
    specification: {
      capacity: '256GB',
      size: '13.3 Inch',
    },
    price: 82900,
  }
  const printProductDetails = ({name,specification:{capacity,size}}) =>`${name} which is of ${size}, has a capacity of ${capacity}`
  console.log(printProductDetails(product)) // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.

  //challange on nullish coalescing

  const employee = {
    name:"pado",
    age:undefined,
    email:"abpatel1249@gmail.com"
  };

  const getUserData =({name,age,email})=>
   {
     return{
        name:name??"unknown",
        age:age??0,
        email:email??"no email provided"
     }  
  }
  const userData = getUserData(employee);
  console.log(userData)


// practice some nullish question
//1)Write a function that takes two parameters, a and b, and returns the value of a if it is not null or undefined, otherwise returns the value of b.

// const nullAorB = (a,b)=>{
//     a:a??"not null"

// }