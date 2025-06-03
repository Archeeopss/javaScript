/** Destructuring an object */

const Player1 = {
    name: "Oikawa Torru",
    position: "Setter",
    Team: "Seijoh"
}

// player1.Team

const {Team} = Player1
console.log(Team);
 
const {position: pos} = Player1
console.log(pos);

const {name} = Player1
console.log(name);


/* const navbar = () => {

}
 navbar(company = a) //destructuring an object

 //destructuring in react
const navbar = ({company}) => {

}
*/

/**API */
//json structure:- {object format}
/*
{
    "name": "Komi Haruki",
    "position": "libero"
    "Team": "Fukurodani"
}
*/

//json structure [array format]
/* 
[
    {Object1},
    {Object2},
    {Object3}....
]
*/
