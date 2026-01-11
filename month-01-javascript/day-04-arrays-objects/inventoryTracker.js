const prompt = require("prompt-sync")();

console.log("====== 🎰 WELCOME TO MY MINI INVENTORY📦 TRACKER 🐝 ======")
let inventoryArray = [{name: "rice", quantity: 20, price: 21}];
let reRun = "yes";

//STARTING THE MAIN WHILE LOOP
while(reRun.toLowerCase() === "yes"){
    console.log("1. View Inventory 📋")
    console.log("2. Add an Item to Inventory 📦")
    console.log("3. Remove an Item from Inventory 🎲")
    console.log("4. Search for Item 🔎")
    console.log("5. Exit ‼️")
    let option = prompt("Choose an option to start👾: ")

    //STARTING THE SWITCH STATEMENTS
    switch (option) {
        case "1":
            if(inventoryArray){
                console.log("====== 🎮 Inventory List 🛍️ ======");
                inventoryArray.forEach((item, index) => {
                    console.log(`🎰 Item ${index}: ${item.name}, Quantity: ${item.quantity}, Price Each: R${item.price}`)
                })
            }
            break;
    
        default:
            break;
    }

    //CLOSING THE LOOP
    reRun = prompt("🛍️ Would you like to make to make another transaction? (yes/no): ");
}

console.log("========= ⛳️ THANK YOU FOR TRYING MY INVENTORY TRACKER 🎲 ============")