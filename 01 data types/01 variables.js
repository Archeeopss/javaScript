const account_ID = 122768
// values of const are fixed and can not be changed at all
let account_mail = "afi@gmail.com";
var account_password = "12345";
account_city = "Kolkata";
let account_state;
 //if the value of the variable is not defined, its considerd an undefined value

account_mail = "afi09@gmail.com";
account_password = "12324523";
account_city = "Ahmedabad";
// account_ID = 9
console.log(account_ID);
console.table([account_ID, account_mail, account_password, account_city, account_state])

/*
a) var is not used at all bc of its scope 
b) const dosen't let you change the value of the variable later down the line
c) using let helps you in changing the value of the variable if so required, later
d) you can declare a variable wo declaration at all but don't do it
*/