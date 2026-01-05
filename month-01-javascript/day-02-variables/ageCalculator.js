const prompt = require("prompt-sync")();
const now = new Date();

let calculateAgain = "yes";

while(calculateAgain.toLowerCase() === "yes"){

    let name = prompt("Enter your name: ");

    let birthYear = parseInt(prompt("Enter your Birth year: "));

    let birthMonth = parseInt(prompt("Enter your Birth Month: "));

    let day = parseInt(prompt("What day were you born(1-31): "));

    const birthDate = new Date(birthYear, birthMonth - 1, day); //MONTHS START AT 0 IN JS

    let age = now.getFullYear() - birthDate.getFullYear();
    
    let monthsDiff = now.getMonth() - birthDate.getMonth();

    let dayDiff = now.getDate() - birthDate.getDate();


    //CHECKING IF BIRTHDAY HAS PASSED
    if(monthsDiff < 0 || (monthsDiff === 0 && dayDiff < 0)){
        age--; //BIRTHDAY HASNT HAPPENED
    }

    // Make months/days always positive for display
    if (dayDiff < 0) {
        monthsDiff--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // last day of previous month
        dayDiff += prevMonth.getDate();
    }
    if (monthsDiff < 0) {
        monthsDiff += 12;
    }

    console.log(`Hello ${name}, you are currently ${age} years, ${monthsDiff} days and ${dayDiff} days old! `)
   
    calculateAgain = prompt("Do you want to calculate again: ");
}

console.log("loop ended")