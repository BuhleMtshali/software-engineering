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