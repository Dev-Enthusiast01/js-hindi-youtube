//Global Scope
let a = 300

// Local Scope
if (true) {
    let a = 10
    const b = 23
    // console.log("INEER: ",a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Suraj"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()

}

// one()

if (true) {
    const username = "Suraj"

    if (username === "Suraj") {
        const website = " youtube"
        //console.log(username + website); //hoga
    }

    // console.log(website); // nahi hoga 
    
}

// console.log(username); //nahi hoga


//+++++++++++++++++ Interesting ++++++++++++++++


console.log(addone(5));

function addone(num) {
    return num + 1
}


addTwo(5)
// js variable can hold fn(), also called as expression
const addTwo = function (num){
    return num + 2
}

