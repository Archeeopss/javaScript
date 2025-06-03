//Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).
const karasuno = new Map()
karasuno.set('01', "Sawamura Daichi")
karasuno.set('02', "Sugawara Koshi")
karasuno.set('03', "Azumane Asahi")
karasuno.set('04', "Nishinoya Yuu")
karasuno.set('05', "Tanaka Ryuunosuke")
karasuno.set('06', "Ennoshita Chikara")
karasuno.set('07', "Kinoshita Hisashi")
karasuno.set('08', "Narita Kazuhito")
karasuno.set('09', "Kageyama Tabio")
karasuno.set('10', "Hinata Shoyo")
karasuno.set('11', "Tsukishima Kei")
karasuno.set('12', "Yamaguchi Tadashi")

console.log(karasuno);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map