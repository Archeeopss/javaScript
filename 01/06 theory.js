/* 
datatype:-
primitive(call by value)- string, number, boolean, null, undefined, symbol, bigint
non primitive(call by reference)- array, onjects, function
js is dynamically typed
*/
const score = 100
const scorevalue = 100.7

const isLogin = false
const outsideTemp = null
let userEmail;
//symbol
const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);
//bigint
const bigNumber = 1233475319872089737n
//array
const animals = ["cat", "dog", "snake"];
//object
{
   name: "Afrin"
   age: 19
}
/*let myobj = {
   name: Torru,
}*/
//function
const myfunction = function(){
   console.log("LOCK TF IN")
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

//ecma documentation for datatypes

