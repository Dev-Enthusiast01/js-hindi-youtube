// 1.if 
const isUserloggedIn = true
const temperature = 41

// if (temperature === 41 ) {
//    console.log("less than 50");
// } else {
//    console.log("temperature is greater than 50");
// }

// console.log("Executed");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//    let power = "fly"
//    console.log(`User power:${power}`);
// }

// console.log(`User power:${power}`);


//1.1 Thats called implicit scope.---Thats a Shorthand--.
const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//    console.log("less than 500");

// }  else if (balance < 750) {
//       console.log("less than 750");

// } else if (balance < 900) {
//    console.log("less 900");
   
// }   else {
//    console.log("less than 1200");

//  }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//2.__________logical operator___________
// 2.1 All thing should be true for if else.[ && double Ampercent ]
if (userloggedIn && debitCard && 2 == 3 ) {
   console.log("Allow to buy course"); 
}

// 2.2 One of them should be true for if else.[ || Pipe sing ]
if (loggedInFromGoogle || loggedInFromEmail) {
   console.log("User logged in"); 
}

