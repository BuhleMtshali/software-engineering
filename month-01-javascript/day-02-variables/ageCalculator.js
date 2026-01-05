const prompt = require("prompt-sync")();
const now = new Date();

let calculateAgain = "yes";

while(calculateAgain.toLowerCase() === "yes"){

    let name = prompt("Enter your name: ");

    let birthYear = parseInt(prompt("Enter your Birth year: "));

    let birthMonth = parseInt(prompt("Enter your Birth Month: "));

    let day = parseInt(prompt("What day were you born(1-31): "));

    const birthDate = new Date(birthYear, birthMonth, day); //MONTHS START AT 0 IN JS

    let age = now.getFullYear() - birthDate.getFullYear();
    
    const monthsDiff = now.getMonth() - birthDate.getMonth();

    const dayDiff = now.getDay() - birthDate.getDay();


    //CHECKING IF BIRTHDAY HAS PASSED
    if(monthsDiff < 0 || (monthsDiff === 0 && dayDiff < 0)){
        age--; //BIRTHDAY HASNT HAPPENED
    }

    console.log(`Hello ${name}, you are currently ${age} years, ${monthsDiff} days and ${dayDiff} days old! `)
   
    calculateAgain = prompt("Do you want to calculate again: ");
}

console.log("loop ended")