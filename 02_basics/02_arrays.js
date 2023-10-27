const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros= ["Superman", "Naruto", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// 1.Array ko push karne ke baad ek array mein dusra array ek poora element bann jata hai jisey hum is tarah se access karte hain.
// console.log(marvel_heros[3][1]);

// 2.Concat bind arrays nicely. Note - newvariable should be print.

// const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros);


// 3.Spread operator:- bind multiple arrays perfectly.
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// 4.Used to concenat multiple Nested array with in new array.  
const another_array = [1, 2, 3, [4, 5, 6], 7 , [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


// 5.Check weather a data is Array or not.
console.log(Array.isArray("Suraj"));

// 6.Through this we can convert values into Array.
console.log(Array.from("Suraj"));
// 6.1.if this not able to make some value into array, then it always show empty array
console.log(Array.from( {name: "Suraj"} )); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// 7.used for any element like var,array or other element etc, to be converted in array
console.log(Array.of(score1, score2, score3));