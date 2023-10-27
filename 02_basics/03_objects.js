// singleton 
// Object.create

// objects literals

const mySym = Symbol("key1");

const JsUser  = {
    name: "Suraj",
    "full name" : "Suraj Yadav",
    [mySym]:"mykey1", //only symbol works when we add "[]" these.
    age: 21,
    location: "Noida",
    email: "Suraj@google.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]
}

// i.casual way to access
// console.log(JsUser.email)
// ii.casual way to access, "Note"
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])         

JsUser.email = "Suraj@chatgpt.com"
// Object.freeze=(JsUser)
JsUser.email = "Suraj@microsoft.com"
// console.log(JsUser)    

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



