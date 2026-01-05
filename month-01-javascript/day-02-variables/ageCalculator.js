const prompt = require("prompt-sync")();

let calculateAgain = "yes";

while(calculateAgain.toLowerCase() === "yes"){
    console.log("loop is running...")


    calculateAgain = prompt("Do you want to calculate again: ");
}

console.log("loop ended")