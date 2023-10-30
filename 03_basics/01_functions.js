//---------Functions--------------

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// just called as reference
// sayMyName

//----- Fn() execution ------
// sayMyName()

//--------------------(   parameters   )---------
function addTwoNumbers(number1, number2) {

      console.log(number1 + number2);
}


function addTwoNumbers(number1, number2) {

    //   let result = number1 + number2
    //   return result
    return number1 + number2
}

//-----------(Argument)-------
const result = addTwoNumbers(3, 5)
// console.log("Result: ",result);


function loginuserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        //Note- return execute hone ke baad baaki code execute nahi hoga
        // return use karne se jo data hum function bhej rahe hai woh same return ho jaata hai or else it'll show "undefined".
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Suraj"))
// console.log(loginuserMessage())

//----------Function with Objects----------

//-----(...thats called rest operator with same name as spread)----------
function calculateCartPrice(cal1, val2, ...num1){
     return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Suraj",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//----------Function with Arrays----------

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 100, 600]));



