//**********These are array specific loops********
//------for of loop fine with [Array],"String", Maps----
// note:- for of loop ☓not iteratable with Objects----


//1. for of loop

// ["", "", ""]
// [{}, {}, {}]

//1.1 for of loop with array.
const arr = [1, 2, 3, 4, 5]

for (const numb of arr) {
    // console.log(numb);
}

//1.2 for of loop with string.
const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// 2.Maps
//  Maps unique value hii leta hai. repeated element hata dega i.e- map.set('Fr', "France").

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Fr', "France")

// console.log(map);



// 2.1 for of loop with maps
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}



// For of loop with Obj. ☓ not works or not iteratable, sssuuuiiiii,
// :- use other methods to iterate Obj like, i.e- (for in loop)

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
    
}
