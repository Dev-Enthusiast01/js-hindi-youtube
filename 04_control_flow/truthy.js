const userEmail = []

if (userEmail) {
    console.log("Got user email"); 
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// 1---How to check Array if it is empty or not----
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// 2--How to check Object if it is empty or not----
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// 3.Nullish Coalescing Operator (??): null undefined. It is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

// Nullish Coalescing Operator (??): null undefined

let  val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 10

console.log(val1);


// 4.Terniary Operator

// condition ? true : false

const iceTeePrice = 100
iceTeePrice <= 80 ? console.log("less than 80") : console.log
("more than 80");
