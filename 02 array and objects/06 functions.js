function add(n1, n2){
    console.log(n1 + n2);
}

add(3, 4)
add(3, "8")
add(3, "j")
add(3, null)

//returning result
function sub(s1, s2){
    let result = s1 - s2
    return result;
    //if you console log after this statement, it'll not work as the function ends after return and its unreachable code
}

const result = sub(8, 4)
console.log("Result: ", result);

function mul(m1, m2) {
    return m1*m2
}

const m3 = mul(4,5)
console.log("Product: ", m3);


function logintext(username) {
    if(username === undefined){ //can also be checked via !username (often done as undefined is a neg value)
        console.log("Plese enter a username");
        //if no value is passed through the function, the value of the string would be undefined
        return
    }
    return `Welcome back ${username}`
}

console.log(logintext("Miya"));
console.log(logintext());


function lgntxt (username = user){
    return `Welcome back ${username}`
}

//console.log(lgntxt( ));
console.log(lgntxt("Reki"));
