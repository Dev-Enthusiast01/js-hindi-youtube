// Immediately Invoked Function Expressions (IIFE)

// Global scope ke polution ke problem se bachne ke kiye "iife" use mein lete hain.
   //---with simple fn()----
(function chai (){
    console.log(`DB CONNECTED`);
})();

   //---with arrow fn()----
( (name) => {
       console.log(`DB CONNECTED TWO ${name}`);
} ) ("Suraj")

// i.IIFE used for preventing the problem that global scope going to make while production.
//ii.Used ';' if we want to write multiple iifes, bcz scope measurment fails.