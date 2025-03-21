/*
stack - for primitive datatype
heap - for non primitive datatype
*/
let name1 = "OikawaTorru"
let name2 = name1
name2 = "bluecastle"

console.log(name1);
console.log(name2);

let play = {
    position: "setter",
    country: "Argentina",
    L: "droppedfromnationals"
}
let voley = play

voley.position = "playbro"
console.log(voley.position);
console.log(play.position);
