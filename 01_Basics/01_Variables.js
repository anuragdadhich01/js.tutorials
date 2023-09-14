const accountId = 14453
let accountEmail = "Anuragdadhich50@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail = "kc@hc.com"
accountPassword = " 1212121"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId,accountEmail, accountPassword, accountCity,accountState]);

/* prefer not to use var
because of issues in block scope and funcatioinal scope
 */