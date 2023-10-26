const name= "Suraj"
const repoCount = 50


//it is old style
// console.log(name + repoCount + " Value");

// use this instead. String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Suraj-kr')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "  Suraj  "
console.log(newStringOne);
// used in form for email or centric character --- ssuuuiiii
console.log(newStringOne.trim());

//used as replace any occuring wrod whith another char or element
const url = "https://suraj.com/suraj%20choudhary"

console.log(url.replace('%20', '-'))

//used to check wheather word occuried in strings --- sssuuuiii
console.log(url.includes('suraj'))

console.log(gameName.split('-'));




