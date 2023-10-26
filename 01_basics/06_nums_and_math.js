const score = 400
// console.log(score);

const balance = new Number (100)
// console.log(balance);

// /console.log(balance.toString().length);

//used to add .oo on numbers
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

//used for precision, also can how much potion we need
// console.log(otherNumber.toPrecision(4))

//used to show digit with more readibility
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math);

// //used for converting -ve values into +ve only.
// console.log(Math.abs(-4));

// //used for declare roundof.
// console.log(Math.round(4.6));

// // agar 4.0 se uper value hui toh 5 print hoga.
// console.log(Math.ceil(4.2));

// // yeh ceil se opposite lowest value lega 4.
// console.log(Math.floor(4.9));

// //to find what's the lowest value in array.
// console.log(Math.min(4, 3, 6, 8));

// //to find what's the Max value in array.
// console.log(Math.max(4, 3, 6, 8));

// -----------important------------ //

// yeh hame 0 aur 1 ke andar value deti hai, value hamesha 0.1, 0.4, 0.6
// ho sakti hai
console.log(Math.random());

//hum 10 se multipy karne hain number ko taaki woh left mein shift ho jaye, But yeh ho sakta hai value aaye 0.1 jisse
// math.floor value de dega '0' iss case ko avoid karne ke liye humne 1' add kar diya bcz hame minimum 1 se bada 10 tak value chahiye 
console.log((Math.random()*10) + 1);


console.log(Math.floor(Math.random()*10 ) + 1);

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1) ) + min )