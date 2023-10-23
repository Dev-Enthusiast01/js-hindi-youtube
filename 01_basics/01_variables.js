const accountId = 144553
let accountEmail = "Suraj@gmail.com"
var accountPassword = "123456"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed


accountEmail= "Suraj@sk.com"
accountPassword="21212121"
accountCity= "delhi"

console.log(accountId);

/*
Prefer not to use var
bcz of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])