// Primitive

// 7 types : String , Number , Boolearn , null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 3518565862102113n

//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj"];

 let myObj = {
    name: "Anurag",
    age: 20,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

//*****************//

//stack (primitive),Heap (Non-Primitive)

let myName = "Anurag Dadhich"

let anotherName = "lavidadhich"
anotherName = "Tufgaming"
console.log(myName);
console.log(anotherName);

let userOne = {
    email : "Anuragdadhich50@gmail.com",
    upi : "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "Anurag@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
