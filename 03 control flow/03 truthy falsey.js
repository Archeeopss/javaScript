const email = "Kenma@nekoma.in" 
/*truthy:- 
 => the value inside the string is the truthy value
 => if the string is empty, its a false value
 => empty array : true value
 => values include:- [], {}, function(){}, " ", 'false', "0"\
 => falsey values incluude :- false, 0, -0, BigInt 0n, "", null, undefined, NaN
 => everything that is not falsy is truthy
*/
if (email){
    console.log("Welcome back");
} else {
    console.log("no email?"); 
}

const arr= [] 
if (arr.length === 0) { //checking for empty aarray
    console.log("The array is empty");
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("The object is empty");
    // Object.keys(obj) returns an array which can then be compared with the length function to check the length of said array which if empty will give zero
}

//Nullish Coalescing Operator (??): [keywords: null, undefined]

let v1;
v1 = 5 ?? 10
console.log(v1);
let v2;
v2 = null ?? 10
console.log(v2);
let v3;
v3 = undefined ?? 10
console.log(v3);
let v4;
v4 = null ?? 10 ?? 15
console.log(v4);


//Terniary operator [condition ? true : false]

const coffee = 100
coffee <= 50 ? console.log("less than 50") : console.log("more than 50");

