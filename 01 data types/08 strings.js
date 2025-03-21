const name = "Shoyo"
const win = 54
// console.log(name + " wins gainst Kageyama " + 1096);

console.log(`The wing spiker of Karasuno is ${name} and his wins against Tabio is ${win}`);

const setter = new String("Kageyama-09")

console.log(setter[0]);
console.log(setter.__proto__); 

console.log(setter.length);
console.log(setter.toUpperCase());
console.log(setter.charAt(5));
console.log(setter.indexOf('y'));

const newString = setter.substring(0, 4)
console.log(newString);

const string2 = setter.slice(-8, 4)
console.log(string2);

const string3 = "    Daichi    "
console.log(string3);
console.log(string3.trim());
//reference- trim javascript mdn

const url = "https://Karasuno.com/Yuu%20Nishinoya"

console.log(url.replace('%20', '-'));
console.log(url.includes('Yuu'));

console.log(setter.split('-')); 
