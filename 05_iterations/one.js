// 1.for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");        
    }
    // console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i} `);
        //console.log(i + '*' + j + " = " + i*j);        
    }
}

// 2.Loops with Array
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    // console.log(element);
}


// 3.break and continue

//3.1 break in Js exits the nearest loop prematurely,
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }

//3.2 continue same as break but run operation one more time without exit loop prematurely ,
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}

