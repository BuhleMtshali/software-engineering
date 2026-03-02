const prompt = require("prompt-sync")();

console.log("======= Mini Vanilla Valculator =======")

let tryAgain = "yes";


while(tryAgain.toLowerCase() === "yes"){
    let number1 = parseFloat(prompt("Enter your first number: "))
    let number2 = parseFloat(prompt("Enter your second number: "))
    let operator = prompt("Choose an operator(+, -, /, *): ")
    let output

    switch(operator){
        case "+":
            output = number1 + number2
            console.log(`${number1} ${operator} ${number2} = ${output}`)
        break;

        case "-":
            output = number1 - number2
            console.log(`${number1} ${operator} ${number2} = ${output}`)
        break;

        case "*":
            output = number1 * number2
            console.log(`${number1} ${operator} ${number2} = ${output}`)
        break;

        case "/":
            if(number2 === 0){
                console.log("Cannot divide by 0")
                break;
            } else{
                output = number1 / number2
                console.log(`${number1} ${operator} ${number2} = ${output}`)
            }
        break;
    }


    tryAgain = prompt("Wanna run again (yes/no)?").toLowerCase()
    console.log("====== Thank you for trying my mini calculator======")
}