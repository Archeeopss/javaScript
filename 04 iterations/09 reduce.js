//read docs
const arr1 = [1, 2, 3, 4]

const tot = arr1.reduce(function (acc, curval) { 
    console.log(`acc: ${acc} \ncurval: ${curval}`);
    return acc + curval}, 0)
console.log(tot);

const arr2 = [1, 2, 3, 4, 5]
const total = arr2.reduce((acc, curval) => acc + curval, 5)
console.log(total);

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
