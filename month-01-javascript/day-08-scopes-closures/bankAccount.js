const prompt = require("prompt-sync")();


//BANK FUNCTION
function createBankAccount(){

    //this is the balance
    let balance = 0

    //THIS IS WHERE I CREATE METHODS TO RETURN
    return{

        //DEPOSIT METHOD & AMOUNT
        deposit(amount){
            balance += amount;
            console.log(`You deposited: R${amount} and the Balance is: R${balance}`)
        },

        //WITHDRAW METHOD & AMOUNT
        withdraws(amount){
            balance -= amount;
            console.log(`You withdrew: R${amount} and the Balance is: R${balance}`)
        },

        //METHOD TO VIEW BALANCE
        viewBalance(amount){
            balance = amount;
            console.log(`Your current Balance is: R${amount}`)
        }
    }
}

//CREATING THE INSTANCE
const account = createBankAccount();


//MAIN FUNCTION
function mainFunction(){
    //GREETING MESSAGE
    console.log("===== 🎲 Welcome to My Mini Bank Transaction App 🐝 ====")

    //STARTING THE MAIN WHILE LOOP
    let transactAgain = "yes";

    while(transactAgain.toLowerCase() === "yes"){
        //GETTING WHAT THE USER WANTS TO DO & Options
        console.log("1. View Balance 🎮")
        console.log("2. Deposit Money 💵")
        console.log("3. Withdraw Money 💷")
        let userInput = prompt("Choose an option: ")

        //STARTING THE SWITCH STSTEMENT
        switch(userInput){
            case "1":
                account.viewBalance();
                break
        }

         //CLOSING THE LOOOP
         transactAgain = prompt("Wanna run again (yes/no): ").toLowerCase()
         console.log("======= 👾 THANK YOU FOR TRYING MY MINI BANK 🏦 ========")
    }
    
}