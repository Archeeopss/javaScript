// If statememt

if(true){

}
if(false){
//the code here will not get executed
}

const login = true
if(login){
    console.log("Welcome back");
    // ==   != checks if the values are equal, will return true even if different data types are involved
    // ===  !== checks if the values are equal and if the data type is same
}


const temp = 43
if (temp < 50){
    console.log("The temperature is less than 50");
    
} else{
    console.log("Temperature is more than 50");
    
}


const score = 250
if(score > 100){
    const power = "fly"
    console.log(`Your Power: ${power}`);
} 


const balance = 1000
if(balance > 500) console.log("y"); 
/*implicit scope
   use semicolon
   comma can be used to add more lines and semicolon atr end can end the scope but its not generally done as the code becomes highly unreadable for future use
*/

if(balance < 500){
    console.log("less than 500");
} else if(balance < 700){
    console.log("less than 600");
} else if(balance < 900){
    console.log("less than 900");
} else{
    console.log("less than 1200");
}

const userlgin = true
const gmail = true
const email = false
if(userlgin && email || gmail){
    console.log("Welcome");
}
