const numbrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nuum1 = numbrr.map((num) => num + 10)
console.log(nuum1);

//chaining
let nuum2 = numbrr.map((num) => num * 10) .map((num) => num + 1).filter((num) => {return num >= 40})
//first function forms an array then passes it to the next function and it continues till the end is reached, the final array is the actual value that is stored in the array
console.log(nuum2);
