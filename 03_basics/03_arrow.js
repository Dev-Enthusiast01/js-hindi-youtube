const user = {
    username: "hitesh",
    price: 999,

   //1."this" keyword do refer the current context(local scope elements)
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        //this current context,values, ya varibales ki baat karta hai
        console.log(this);

    } 


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// 2.console.log(this); //show as "{}", but in console it shows "window"


// 3.Function mein this. use nahi kar sakte.
//        ++++++3.1 f() used++++++.

// function chai(){
//     let username = "Suraj"
//     console.log(this.username);
// }
// chai()


//       ++++3.2 f() with Varible used++++.

// const chai = function () {
//     let username = "Suraj"
//     console.log(this.username);
// }
// chai()

// const chai =  () => {
//     let username = "Suraj"
//     console.log(this);
// }
// chai()


// 4.--------------Arrow.fn() starts here-----------------

// 4.1"arrow.fn()" it is called 'Explicit Return' we can also use varible for it. 
// Note:- "{braces/curly bracket}" mein wrap kara toh 'return' likhna padega. 

//  const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 4.2 It is called Implicit return. without "{braces/curly bracket}"
// Note:- (parenthesis) mein wrap kara toh 'return' nahi likhna padega.
// const addTwo = (num1, num2) => ( num1 + num2 )

// 5.--------------Arrow.fn() with Objects-----------------
// object ko return karne ke liye usey (parenthesis) mein wrap karna hi padega.
const addTwo = (num1, num2) => ( {username: "Suraj"})

console.log(addTwo(3, 4))

 
// -------just example with loop + fn()-------ignore suuiiii
// const myArray = [2, 5, 3, 7, 8,]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())



