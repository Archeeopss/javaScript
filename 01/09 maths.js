/*const points = 400
const score = new Number(200)
console.log(points);
console.log(score);

console.log(score.toString().length);
console.log(score.toFixed(2));

const Nekoma = 23.8654
console.log(Nekoma.toPrecision(3));

const DateTech = 1123.8654
console.log(DateTech.toPrecision(3));
//it'll give value in exponents if toPrecision is used in when decimal dosent cross its value

const BlueCastle = 1000000000
console.log(BlueCastle.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

*/
// MATHS

console.log(Math);
//neg values turn positive while pos remains pos
console.log(Math.abs(-4));
//round off values
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//rounds off to a higher number
console.log(Math.floor(4.6)); //rounds off to a lower number
//random number
console.log(Math.random()); //value comes in floating point bw 0 amd 1
console.log((Math.random()*10) + 1);

//imp

const min = 10
const max = 20

// math.random() * (max - min + 1) + min
//math.floor is used to get a round number
console.log(Math.floor(math.random() * (max - min + 1) + min));