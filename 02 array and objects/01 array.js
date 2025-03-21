//array

const MSBY = [0, 1, 2, 3, 4, 5]
console.log(MSBY[3]);
/* Array in JS:-
-> the elements can be of different data types
-> they are resizeable
-> array within an array
-> not associative; elements can't be accessed using arbitary strings
-> zero indexed
 array copy operation creates shallow copies  
 ---> shallow copies- copy of an object whose properties do share the same refernces as those of the source object from which the copy was made
     ->> when you change either the source or the copy the value in the other place also changes
 ---> deep copies- copy of an object whose properties do not share the same refernces as those of the source object from which the copy was made
*/

const Seijoh = ["Oikawa", "Matsukawa", "Hanamaki", "Iwazumi", "Yahaba", "Watari", "Kindaichi", "Kunimi"]

const Nekoma = new Array("Kuroo", "Kenma", "Lev", "Kai", "Yaku", "Yamamoto", "Fukunaga", "Inuoka", "Teshiro", "Shibayama")

//Operations 

MSBY.push(6) //push - adds elements after the last element
console.log(MSBY);
MSBY.push(7)
console.log(MSBY);
MSBY.pop() // pop- removes the last element from the array
console.log(MSBY);

MSBY.unshift(10) // unshift- adds an element at the 0th spot 
console.log(MSBY);

MSBY.shift() // shift- removes the element at the 0th spot 
console.log(MSBY);

console.log(MSBY.includes(9));
console.log(MSBY.indexOf(9)); //-1 bc the element dosent exist
console.log(MSBY.indexOf(4));

const SchweidenAdlers = MSBY.join() //turns the array into a string and joins the mentioned array at the end
console.log(MSBY);
console.log(SchweidenAdlers);
console.log(typeof SchweidenAdlers);


// Slice, Splice 

console.log("Atsumu", MSBY);
const Miya = MSBY.slice(1, 3) // slice- returns a copy of a section of an array
//--> returns 1, 2 over here bc it stars from 1st element and ends bfr the 3rd element
console.log(Miya);
console.log("Osamu-slice", MSBY);

const Miya2ins = MSBY.splice(1, 3) 
/* splice: divies the Array into two parts-
-> 1st part inclueds the spliced elements (here- 1, 2, 3)
-> 2nd part includes the unspliced elements (here-0, 4, 5, 6)
-> after the operation the array gets reduced to the unspliced elememts
-> the spliced elememts get cut out of the array
*/
console.log(Miya2ins); //this includes the 3rd element as well

console.log("Osamu-splice", MSBY);