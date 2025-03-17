//const BungoTalesUser = new Object()
//const BungoTalesUser = {}

const BungoTalesUser1 = {}
BungoTalesUser1.id = "Atsutshi"
BungoTalesUser1.name = "Nakajima Atsushi"
BungoTalesUser1.isloggedin = false

const BungoTalesUser2 = {
    email: "Akutagawa@gmail.com",
    user1: {
        Name: "Akutagawa Ryuunosuke",
        ability: "Rashoomun",
    },
    user2: {
        Name: "Akutagawa Gin",
        ability: null,
    }
}

console.log(BungoTalesUser2);
console.log(BungoTalesUser2.user1);
console.log(BungoTalesUser2.user1?.ability); //the ? checks if user1 is a object present in the thread, useually used during api calls

const o1 = {1: "a", 2: "b"}
const o2 = {3: "c", 4: "d"}

const o3 = Object.assign(o1, o2)
console.log(o3);
const o4 = Object.assign({}, o1, o2)
// the {} assigns the o4 as an empty object then proceeds to fill in the values of o1 and o2 over there
console.log(o4);

const o5 = {...o1, ...o2}
console.log(o5);


const PortMafia = [
    {
        id: "Nakahara Chuuya",
        ability: "Upon the tainted sorrow"
    },
    {
        id: "Hirotsu Ryuu",
        ability: "Falling Camellia"
    },
    {
        id: "Kouyou Ozaki",
        ability: "Golden Demon"
    },
    {
        id: "Tachihara Michoizho",
        ability: "Midwinter momento"
    },
    {
        id: "Mori Ogai",
        ability: "Elise"
    },
]

console.log(PortMafia[0].ability);


console.log(BungoTalesUser1);
console.log(Object.keys(BungoTalesUser1));
console.log(Object.values(BungoTalesUser1));
console.log(Object.entries(BungoTalesUser1));
console.log(BungoTalesUser1.hasOwnProperty('name'));

