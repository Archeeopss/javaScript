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

function any(){
    let username = "Oscar"
    console.log(this.username);
}
any()

