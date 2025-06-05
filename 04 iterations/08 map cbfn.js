const numbrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nuum1 = numbrr.map((num) => num + 10)
console.log(nuum1); //.map() creates a new array by adding 10 to each element.

//chaining
let nuum2 = numbrr.map((num) => num * 10) .map((num) => num + 1).filter((num) => {return num >= 40})
/*readable version of the line:-
let nuum2 = numbrr
  .map((num) => num * 10)       // Step 1
  .map((num) => num + 1)        // Step 2
  .filter((num) => {            // Step 3
    return num >= 40;
  });

console.log(nuum2);
*/
//first function forms an array then passes it to the next function and it continues till the end is reached, the final array is the actual value that is stored in the array
console.log(nuum2);
