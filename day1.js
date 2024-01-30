//  2 days we can solve some practice question in if else and loop

//q1..  1. Write a JavaScript program that displays the largest integer among two integers.

let a =10,b=20;

if(a>=b){
    console.log(`${a} is greter then ${b}`)
}
else{
    console.log(`${b} is greter then ${a}`)

}


//q2 1. Check if a number is odd or even in JavaScript
// let num = 10;

// if(num %2 == 0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }

// let nums = 3;
// if(nums === 4){
//     console.log("nums is 3")
// }
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md

//q3. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// var result = prompt("Enter your age");

// if(result >= 18){
//     console.log("you are od enough tod drive")
// }
// else{
//     console.log(`you are left with ${18 - result} years to drive`)
// }

// q4 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let yourResult = prompt("enter your age");
// let myAgeIs = 18;

//  if(yourResult >= myAgeIs){
//     console.log("you are old man")
//  }
//  else{
//     console.log ("you are young")
//  }

 //q5 f a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.

let num1 = 10;
let num2 = 20;
 
num1 >= num2 ? console.log("num1 is big"):console.log("num1 is small")