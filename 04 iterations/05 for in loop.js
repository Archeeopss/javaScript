const captains = {
    'Karasuno' : 'Sawamura Daichi',
    'Aoba Johsei' : 'Oikawa Tooru', 
    'Nekoma' : 'Kuuro Tetsuro',
    'Fukorodani' : 'Bokuto Kotaro',
    'Shiratorizawa' : 'Ushijima Wakatoshi'
}

for (const key in captains) {
    //console.log(captains[key]);
    console.log(`${captains[key]} is the captain for ${key}`); 
}

let setters = ["Oikawa Torru", "Miya Atsumu", "Kozume Kenma", "Kageyama Tabio", "Akaashi Keiji", "Sugawara Koshi"]

for (const key in setters) {
    console.log(`The setters are ${key}`);
    console.log(`The setters are ${setters[key]}`);
    
} //gives out keys instead of values by default

//maps is not iterable