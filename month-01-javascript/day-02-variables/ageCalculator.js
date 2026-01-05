const prompt = require("prompt-sync")();
const now = new Date();

let calculateAgain = "yes";

while(calculateAgain.toLowerCase() === "yes"){

    let name = prompt("Enter your name: ");

    let birthYear = parseInt(prompt("Enter your Birth year: "));

    let birthMonth = parseInt(prompt("Enter your Birth Month: "));

    let day = parseInt(prompt("What day were you born(1-31): "));
   
    calculateAgain = prompt("Do you want to calculate again: ");
}

console.log("loop ended")