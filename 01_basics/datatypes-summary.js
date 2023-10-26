// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2334235345342413n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shakiman", "naagraj", "doga"];
let myObj ={
    name: "Suraj",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// stacks mein copy milta hai. Heap mein real reference milta hai

let myYoutubename= "Suraj"

let anothername = myYoutubename
anothername = "Suuiii"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "suraj@google.com"

console.log(userOne.email);
console.log(userTwo.email);
