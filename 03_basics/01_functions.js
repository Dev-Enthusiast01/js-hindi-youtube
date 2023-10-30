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
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage("Suraj"))
console.log(loginuserMessage("Suraj"))