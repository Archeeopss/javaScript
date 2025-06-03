const Fukurodani = ["Bokuto", "Akaashi", "Komi", "Washio", "Sarukui", "Konoha", "Anahori", "Onaga"]
const Karasuno = ["Daichi", "Sugawara", "Nishinoya", "Asahi", "Ryunosuke", "Tabio", "Shoyo", "Yamaguchi", "Kei"]

Fukurodani.push(Karasuno)
console.log(Fukurodani);
console.log(Fukurodani[8]);
console.log(Fukurodani[8][2]);

const nationals = Fukurodani.concat(Karasuno)
console.log(nationals);

//spreading operation- can merge two or more arrays at the same time
const springNationals = [...Fukurodani, ...Karasuno]
console.log(springNationals);

const teams = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const team_men = teams.flat(Infinity) //if you do not want to mention the depth or are not sure of the actual depth/ if you want to flat out all the elements but are lazy enough to not look up the depth ---> use infinity....or you can write the depth as wel like 3 is the deoth here to flat out all the elements ---> in normal situations you're expected to give out the actual depth 
//flat returns a new array with all sub array elements concatinated into it recursively up to the specified depth
console.log(team_men);


console.log(Array.isArray("Atsumu")); // boolean value
console.log(Array.from("Atsumu")); // forms a string of all the elements
//console.log(Array.from({name: Atsumu})); //either an error or an empty array will be formed

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //.of returns a new array from a set of elements 