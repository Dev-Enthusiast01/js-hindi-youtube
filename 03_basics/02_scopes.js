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

one()
