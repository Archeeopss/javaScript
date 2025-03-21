function addprices(...price){
    return price;
}

console.log(addprices(120, 540, 64, 345));

function cartprices(p1, p2, ...price){
    return price;
}

console.log(cartprices(120, 540, 64, 345)); //here the first two prices go to v1 and v2 respectively while the rest of the numbers get in price array. Since its return price, v1 and v2 values are not seen in console


const user = {
    name: "Nanjo Kojiro",
    job: "chef",
}

function passingobjects(anyObject){
    console.log(`Hi I'm ${anyObject.name} and I work as a ${anyObject.job}.`);
}

passingobjects(user) 
passingobjects({name: "Sakurayashiki Kaoru", job: "Calligraphy artist"}) 

const anArray = [234, 434, 643, 567]

function retsecval(getarr){
    return getarr[1];
}
console.log(retsecval(anArray));
console.log(retsecval([123, 345, 236, 567, 896]));
