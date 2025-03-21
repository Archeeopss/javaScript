// Dates

let Date1 = new Date()
console.log(Date1.toString());
console.log(Date1.toDateString());
console.log(Date1.toJSON());
console.log(Date1.toLocaleDateString());
console.log(Date1.toTimeString());
console.log(Date1.toUTCString());
console.log(typeof Date1);

//syntax 1- month starts at 0, array 
let Date2 = new Date(2023, 0, 23)
console.log(Date2.toDateString());

//syntax 2
let Date3 = new Date(2023, 0, 23, 5, 3)
console.log(Date3.toLocaleDateString());

//syntax 3
let Date4 = new Date("2025-01-23")
console.log(Date4.toLocaleDateString());

//syntax 4
let Date5 = new Date("01-14-2025")
console.log(Date5.toLocaleDateString());

//time stamps
let ts = Date.now()
console.log(ts);
console.log(Date4.getTime());

//converting date into seconds
console.log(Math.floor(Date.now()/1000));
//if not devided by 1000 the s=result is in decimals which is not required in most cases

let Date6 = new Date()
console.log(Date6.getHours());
console.log(Date6.getDay());
console.log(Date6.getMonth()+1);

console.log(`as of today, its the ${Date6.getMonth()+1} month`);

//Editing/custumizing date and time string
Date6.toLocaleString('default', {
    weekday: "long",
    //timeZoneName: ''
})