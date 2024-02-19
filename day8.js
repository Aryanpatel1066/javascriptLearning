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