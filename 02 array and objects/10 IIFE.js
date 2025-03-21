/** IMMEDIETLY INVOKED FUNCTION EXPRESSIONS (IIFE) */

/*IIFE:- 
used to prevent pollution from the variables or declarations of global scope
theyre executed immediately
*/
(function two(){ //first paranthesis:- for definition of the function
    console.log("Hellow nya~~"); 
})(); //second parenthesis in the end:- for execution

(function f(a, b) {
    return a + b;
  })(2, 3);

// writing it in arrow form
( function three() {
    console.log("Welcome");
})(); //add semicolon here

( () => {
    console.log("Welcome~~");
})(); 

/**
 (async () => {
    // async function logic
  })();
 */

( (un) => {
    console.log(`Hi, my name is ${un}`);
})('Reki'); 