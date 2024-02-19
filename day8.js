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