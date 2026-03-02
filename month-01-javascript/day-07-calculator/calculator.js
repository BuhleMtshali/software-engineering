const prompt = require("prompt-sync")();

console.log("======= Mini Vanilla Valculator =======")

let tryAgain = "yes";


while(tryAgain.toLowerCase() === "yes"){
    let number1 = parseFloat(prompt("Enter your first number: "))
    let number2 = parseFloat(prompt("Enter your second number: "))


    tryAgain = prompt("Wanna run again (yes/no)?").toLowerCase()
    console.log("====== Thank you for trying my mini calculator======")
}