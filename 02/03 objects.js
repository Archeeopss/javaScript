//declaration
/*singleton
->Singleton object is a design pattern that ensures a class has only one instance while providing a global point of access to that instance.
-> useful for managing shared resources or data across multiple instances of a class, ensuring consistent management of shared resources like configuration data, caches, or connection pools
*/

//objet literals
//constructor method

const friends = Symbol("Kenma")
 
// Object.create
const player10 = {
    name: "Hinata",
    "full name": "Shoyo Hinata", //you will no be able to access this via . => player10.full name...you can't access this value
    team: "Karasuno",
    year: 2,
    position: "middle blocker",
    isplaying: true,
    [friends]: "Oikawa", //declare symbols within square brackets
    lastPlayedAgainst: ["Seijoh", "DateTech"]
}

//Accessing objects
console.log(player10.position);
console.log(player10["position"]);
console.log(player10["full name"]);
console.log(player10[friends]);
console.log(typeof player10[friends]);

//changing values in object
player10.team = "MSBY"
// Object.freeze(player10)
// player10.team = "MSBY2"
console.log(player10);

player10.greeting = function(){
    console.log("I'm Hinata Shoyo from concrete");
}

player10.greeting2 = function(){
    console.log(`I'm Hinata Shoyo from concrete, I play as a ${this.position}`); 
} //referencing object elements

console.log(player10.greeting());
console.log(player10.greeting2());


