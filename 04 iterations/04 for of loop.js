//for of : specific to arrays

let setters = ["Oikawa Torru", "Miya Atsumu", "Kozume Kenma", "Kageyama Tabio", "Akaashi Keiji", "Sugawara Koshi"]

for (const val of setters) {
    console.log(val);
}

const team = "Aoba Johsai"
for (const elm of team) {
    console.log(`Each element is ${elm}`);
}

// Maps

const Seijoh = new Map()
Seijoh.set('01', "Oikawa Torru")
Seijoh.set('02', "Matsukawa Issei")
Seijoh.set('03', "Hanamaki Takahiro")
Seijoh.set('04', "Iwaizumi Hajime")
Seijoh.set('06', "Yahaba Shigeru")
Seijoh.set('07', "Watari Shinji")
Seijoh.set('12', "Kindaichi Yutaro")
Seijoh.set('13', "Kunimi Akira")
Seijoh.set('14', "Shido Heisuke")
Seijoh.set('15', "Yuda Kaneo")
Seijoh.set('16', "Kyotani Kentaro")

console.log(Seijoh);

for (const key of Seijoh) {
    console.log(key);  
}

for (const [key, val] of Seijoh) {
    console.log(`${val}'s number is ${key}`);  
}

const captains = {
    'Karasuno' : 'Sawamura Daichi',
    'Aoba Johsei' : 'Oikawa Tooru', 
    'Nekoma' : 'Kuuro Tetsuro',
    'Fukorodani' : 'Bokuto Kotaro',
    'Shiratorizawa' : 'Ushijima Wakatoshi'
}

/* for (const [team, name] of captains) {
    console.log(`${name} is the captain of ${team}`);
} */