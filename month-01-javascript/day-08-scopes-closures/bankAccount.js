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
        }
    }
}