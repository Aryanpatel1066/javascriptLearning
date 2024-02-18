//what is node js => run time environment of js (run without browser)

//js is single threaded 

var name = "pado";
console.log(name);

const user={
    name:"aryan",
    age:20
};
consolr.log(user.name)
console.log(user['name'])
delete user.name;

const person = {
    name:"pado",
    age:22,
    address:{
        city:"vijapur",
        state:"gujarat",
        country:"india"
    }
}
for(let data of person){
    console.log()
}
let a = 10;
let b = 20;

const [p,q] = [b,a];
console.log(a,b)