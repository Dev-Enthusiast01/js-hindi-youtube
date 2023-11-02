const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10} )

// chaining: do teen method hum ek saath use karte hain 
const newNums = myNumbers
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1 )
                 //filter mein true ya false ka game hain.
                 .filter ( (num) => num >= 40 )

console.log(newNums);