//global scope
let a = 25
const b = 21
var c = 36

console.log(a);
console.log(b);
console.log(c);

var f = 360
console.log(f);
let d = 12
if(true){
    let d = 25
    console.log("d:", d);
    
    const e = 21
    var f = 36 //This f here rewrites the prev var f. This is usually an issue during longer codes or when files are imported from other sources.
    f = 42 //this here then again rewrites the previous f
} //block scope

// console.log(d); => dosent work bc the scope of let is till the lifetime of the function
// console.log(e); => dosent work bc the scope of const is till the lifetime of the function
console.log(f); //=> it works bc the scope of var is till the lifetime of the program

console.log(d);


//Nested scope

function one(){
    const user = "Yosano Akiko"
    function two(){
        const ability = "Thou Shalt Not Die"
        console.log(user);
    }
    // console.log(ability);
    two() // if two is not called then it'll not get executed
}
one() 

if(true){
    const user = "Agatha Christie"
    if(user === "Agatha Christie"){
        const ability = " And then there were none"
        console.log(user + ability);
        
    }
    // console.log(ability); 
}
// console.log(user);



//Case A


console.log(addone(6));
function addone(num){ //function
    return num+1
}
console.log(addone(5));

// addtwo(6) => can't be executed beforehand when  fuction is declared as a const
const addtwo = function(num){ // expression
    return num + 2
}
console.log(addtwo(5));

