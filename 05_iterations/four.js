//------for in loop fine with {Objects},[Array], etc
// note:- ☓ not iteratable with Maps----


// for in loop with Obj 
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// For in loop with Array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}



// map is not iteratable with For in loop
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }

