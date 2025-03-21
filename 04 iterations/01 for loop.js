/*for (let index = 0; index < array.length; index++) {
    const n = array[index];
    
}*/

for (let i = 0; i <= 3; i++) {
    const n = i;
    // console.log(n);
    if(n==2){
        console.log("median");
    }
}

for(let i = 0; i<= 5; i++) {
    for(let j = 0; j<= i; j++){
        // console.log("*");
    }
    // console.log(" ");
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and olv ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        console.log(`${i} * ${j} = ${i*j}`);
    } 
}


let setters = ["Oikawa Torru", "Miya Atsumu", "Kozume Kenma", "Kageyama Tabio", "Akaashi Keiji", "Sugawara Koshi"]
for (let i = 0; i < setters.length; i++) {
    const s = setters[i];
    console.log(s);
}

//Keywords:- continue and break

for (let i = 1; i <= 20; i++) {
    if(i === 9){
        console.log("Detected 9");
        break;
    }
    console.log(`The value of i is ${i}`);
}


for (let i = 1; i <= 10; i++) {
    if(i === 9){
        console.log("Detected 9");
        continue;
    }
    console.log(`The value of i is ${i}`);
}
