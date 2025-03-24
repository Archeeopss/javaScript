let setters = ["Oikawa Torru", "Miya Atsumu", "Kozume Kenma", "Kageyama Tabio", "Akaashi Keiji", "Sugawara Koshi"]

//callback function : recursive function
setters.forEach( function (name) {
    console.log(name);
})

setters.forEach((name) => {console.log(name);})

setters.forEach(printit)
function printit(name){
    console.log(name);
}

setters.forEach((item, index, arr) => {console.log(item, index, arr);
})

// array of objects

const captains = [
    {
        player: "Oikawa Torru",
        team: "Aoba Johsei"
    },
    {
        player: "Sawamura Daichi",
        team: "Karasuno"
    },
    {
        player: "Kurro Tetsuro",
        team: "Nekoma"
    },
    {
        player: "Bokuto Kotaro",
        team: "Fukurodani"
    },
    {
        player: "Ushijima Wakatoshi",
        team: "Shiratorizawa"
    },
]

captains.forEach((name) => {console.log(name.player);
})