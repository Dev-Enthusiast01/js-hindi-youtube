// 1.A Singleton object 
// const tinderUser  = new Object()

// 2.A Non-Singleton object 
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// 3.console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Suraj",
            lastname: "yadav"
        }
    }
}

// console.log(regularuser.fullname);
// add "." to access nester element
// 4.console.log(regularuser.fullname?.userfullname.firstname);

//----- To combine objects ------- 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// 5.object.assign used for preventing mergens of objects that occurs nested object. xD
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// 6.Spread Operator for objects.
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [ 

    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
    
]

users[1].email
// console.log(tinderUser);

// 7.keys-means obj ke ke element print karwane ke liye
// Note :- Output Array ki form mein aata hai "[]"
console.log(Object.keys(tinderUser));

// 8.values-means obj ke ke element ki value print karwane ke liye
// Note :- Output Array ki form mein aata hai "[]".
console.log(Object.values(tinderUser));

// 9. entries - har ek key-value ko array mein separate kar diya jaata hai
// like [ [ 'id', '123abc' ], [ 'name', 'Sammy' ] ].
console.log(Object.entries(tinderUser));

// 10. to check wheather a obj property exist or not ?.
console.log(tinderUser.hasOwnProperty('isLogged'));
