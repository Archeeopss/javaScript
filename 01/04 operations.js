// OPERATIONS IN JS
let a = 6
let negA = -a
console.log(negA);
console.log(5 + 7);
console.log(5 - 7);
console.log(5 * 7);
console.log(5 ** 7); //exponent => 5^7
console.log(14 / 7);
console.log(25 % 7); //cryptography, algorithms, etc

let str1 = "Hello "
let str2 = "Afi"

let str3 = str1 + str2;
console.log(str3);

//operations within data types
console.log("5" + 7);
console.log(5 + "7");
console.log("5" + "7");
console.log("5" + 7 + 2);
console.log(5 + 7 + "3"); 
/**Note **Reason for different input:-
 * ToPrimitive:-
 * The abstract operation, toPtimitive takes argument inpur and optional argument *preffered type* (string/number) and returns either a nominal completion containing ECMA script language value or a throw completion.
 * It converts the initial argument to a non-Object type. If an object is capable of converting more than one primitive type, it may use the optional hint preffered-type to favour the type
 * to summerise-
 * the arithmetic operation terminates and turns into a string of number when the code detects a string in presence
 * to summerise even more-
 * its fucking unrelyable and don't trust it
 */
console.log( (3 + 4) * 5 % 2);

//don't try these
console.log(+true);
console.log(+"");

let x, y, z
x = y = z = 2 + 3 + 4

let gameCounter = 100
gameCounter++; 
console.log(gameCounter);
/* Note: Prefix vs Postfix:-
=> If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
=> If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
=> The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). 
=> ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.
=> refferal:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 */
 