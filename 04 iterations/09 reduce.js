//read docs
//.reduce() method in JavaScript is a powerful way to accumulate or combine values in an array into a single result (like a sum, product, object, or even another array).

/*SYNTAX:-
array.reduce((accumulator, currentValue) => {
  // logic to combine values
  return updatedAccumulator;
}, initialValue);

accumulator: the result so far (starts as initialValue)
currentValue: the current element in the array
initialValue: the starting value (e.g., 0 for a sum)
*/

/*Use Cases:-
Summing numbers
Flattening arrays
Counting occurrences
Building objects
Transforming data
*/

const arr1 = [1, 2, 3, 4]

const tot = arr1.reduce(function (acc, curval) { 
    console.log(`acc: ${acc} \ncurval: ${curval}`);
    return acc + curval}, 0)
console.log(tot);

const arr2 = [1, 2, 3, 4, 5]
const total = arr2.reduce((acc, curval) => acc + curval, 5)
console.log(total);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }


const cart = [
    {
        itemName: "fountain pen",
        itemPrice: 480
    },
    {
        itemName: "fountain pen ink - 100ml",
        itemPrice: 600
    },
    {
        itemName: "journal",
        itemPrice: 399
    },
    {
        itemName: "glass pen",
        itemPrice: 420
    },
    {
        itemName: "fine liner",
        itemPrice: 240
    },
    {
        itemName: "sketch book",
        itemPrice: 540
    },
]

const paymentPrice = cart.reduce((acc, item) => acc+item.itemPrice, 0)
console.log(`Your final amount is: ${paymentPrice}`);
