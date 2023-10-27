// array.  (paranthesis), [brackets], {braces/curly braces}. sssuiii---(:

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["Naruto", "Luffy"]

const myArr2 = new Array (1,2,3,4)
// console.log(myArr[1]);

// Array methods

// push used to add value in array
// myArr.push(6)
// myArr.push(7)

// pop karne se last value remove ho jaati hai
// myArr.pop()

//unshift add value in start, index[0]
// myArr.unshift(9)

// Shift remove value from start, index[0]
// myArr.shift()

//includes method check values availability Q/A.false nd true 
// console.log(myArr.includes(9));
// find index in array 
// console.log(myArr.indexOf(3));

//join method bined the arrays + and convert it as string.
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

//A.original array tha
console.log("A ", myArr);

//slice :- took the 1 to 2 value. Note- last mention value ignored[i.e 3]
const myn1 = myArr.slice(1,3)

// B.------ Yahan slice use kara --------
console.log(myn1);
console.log(" B", myArr);

// C.------ Yahan splice use kara --------
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//Note - After slice method, if we use splice method, then the slice value has removed from the array.


