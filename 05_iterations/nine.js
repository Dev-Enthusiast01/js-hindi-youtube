// reduce fn used :-
// In the 1st iteration, the value of acc is indeed 3. This value doesn't get saved in a separate variable; it simply replaces the initial value (0) that was provided as the initial accumulator value. 
// The value of acc is updated in each iteration based on the result of the callback function, and this updated value is used in the next iteration.

// So, here's a step-by-step explanation of what happens:

// In the 1st iteration, acc is initialized to 0.
// The callback function calculates 0 + 3, which is 3.
// The new value of acc becomes 3.
// In the 2nd iteration, this updated acc value of 3 is used as the accumulator value.
// The callback function then calculates 3 + 6, which is 9.
// The new value of acc becomes 9.
// In each iteration, the current value of acc is the result of the previous iteration's calculations. This is how the reduce method accumulates values as it progresses through the array,
// effectively overwriting the accumulator with the new value for each step.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc,currval) { 
//    console.log(`acc: ${acc} and currval ${currval}`);
//    return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



const shoppingCart = [
   {
      itemName: "js course",
      price: 2999

   },
   {
      itemName: "py course",
      price: 999

   },
   {
      itemName: "mobile dev course",
      price: 5999

   },
   {
      itemName: "data science course",
      price: 12999

   },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
