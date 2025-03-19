const user = {
    name: "Yugure Yuuhi",
    job: "Voice Actor",

    Hello: function(){
        console.log(`Hello I am ${this.name} currently working as a ${this.job}`);
        console.log(this);
        
    }
}

user.Hello()
user.name = "Yutatane Yasumi"
user.Hello()
console.log(this); 
/*
when you're under node environment the context is empty and thus it refers to an empty object.
however, when this is run in browser console, this gives out windows as the object as it is the most global object there
*/

/** ARROW FUNCTION */

function any1(){
    let username = "Oscar"
    console.log(this.username);
}
any1()

const any2 = function(){
    let username = "Oscar"
    console.log(this.username);
}
any2()

const any3 = () => {
    let username = "Oscar"
    console.log(this);
    console.log(this.username);
}
any3()

//basic syntax of an arrow function

const add = (num1, num2) => {
    return num1 + num2; //explicit return
}
console.log(add(5, 8));

//implicit return arrow function
const sub = (num1, num2) =>  num1 - num2
console.log(sub(24, 6));

const mul = (num1, num2) =>  (num1 * num2)
console.log(mul(4, 6));

const uname = (num1) => ({un: "Chinen Miya"}) //returning an object
console.log(uname(5));

// const arr = [2, 3, 5, 6, 8, 4, 7]
// arr.forEach(function() {})
// arr.forEach(() => {})
// arr.forEach(() => ())
