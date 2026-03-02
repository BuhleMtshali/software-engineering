const prompt = require("prompt-sync")();

console.log("======= Mini Vanilla Valculator =======")

let tryAgain = "yes";


while(tryAgain.toLowerCase() === "yes"){
    console.log("loop is running")


    tryAgain = prompt("Wanna run again (yes/no)?").toLowerCase()
}