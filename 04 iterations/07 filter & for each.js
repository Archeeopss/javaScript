let setters = ["Oikawa Torru", "Miya Atsumu", "Kozume Kenma", "Kageyama Tabio", "Akaashi Keiji", "Sugawara Koshi"]

const players = setters.forEach((name) => {
    console.log(name);
    return name;
}) //forEach does not return any values
console.log(players);

const numbrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const brrr = numbrr.filter((val) => val > 5) 
// if youre using {} then use a seperate return statement or else there will be no return value {ba you're opening a different scope}
console.log(brrr);

const odd = []
const even = []
numbrr.forEach((num) => {
    if (num%2 === 0) {
        even.push(num)
    }
    else{
        odd.push(num)
    }
})

console.log(even);
console.log(odd);

const player = [
    {name: "Oikawa Torru", school: "Aoba Johsei", position:"setter", job: "professional athlete", country: "Argentina"},
    {name: "Iwaizumi Hajime", school: "Aoba Johsei", position:"wing spiker", job: "physical trainer", country: "USA"},
    {name: "Kageyama Tabio", school: "Karasuno", position: "setter", job: "professional athlete", country: "Japan"},
    {name: "Hinata Shoyo", school: "Karasuno", position:"wing spiker", job: "professional athlete", country: "Japan"},
    {name: "Kuuro Tetsuro", school: "Nekoma", position:"wing spiker", job: "voleyball association", country: "Japan"},
    {name: "Kozume Kenma", school: "Nekoma", position: "setter", job: "gamer", country: "Japan"},
    {name: "Bokuto Kotaro", school: "Fukurodani", position:"wing spiker", job: "professional athlete", country: "Japan"},
    {name: "Miya Atsumu", school: "Inarizaki High", position: "setter", job: "professional athlete", country: "Japan"},
    {name: "Miya Osamu", school: "Inarizaki High", position:"wing spiker", job: "chef", country: "Japan"},
    {name: "Haiba Lev", school: "Nekoma", position:"Middle blocker", job: "model", country: "Russia"},
    {name: "Ushijima Wakatoshi", school: "Shiratorizawa", position:"wing spiker", job: "professional athlete", country: "Japan"},
];

const str = player.filter((p) =>  p.position === "setter")
console.log(str);

const jp = player.filter((p) => p.country === "Japan")
console.log(jp);

const jpstr = player.filter((p) => {return p.position === "setter" && p.country === "Japan"})
console.log(jpstr);
