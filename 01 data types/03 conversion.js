let score = "90abc"
 
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); 
console.log(valueInNumber);
/*NaN = not a number; 
so, don't rely much on the numbers or datatypes strictly;
Do not try to convert a string into a number, it won't work and result would be NaN;
*/
/* Note:-
 *  "33" => 33
 * "33abc" => NaN
 * true => 1; false => 0;
 * 
 */

let a = null
console.log(a);

let b = undefined
console.log(b);

let c = true 
console.log(c);

let IsLoggedIn = 1;
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);
 /*Note :-
  * converting an empty string in boolean => false
  * converting a name in boolean => true
 */

let fall = 26
let stringnumber = String(fall)
console.log(stringnumber);
console.log(typeof stringnumber);
 
  