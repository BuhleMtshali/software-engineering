const prompt = require("prompt-sync")();

console.log("====== 🎰 WELCOME TO MY MINI INVENTORY📦 TRACKER 🐝 ======")
let inventoryArray = [];
let reRun = "yes";

//STARTING THE MAIN WHILE LOOP
while(reRun.toLowerCase() === "yes"){
    console.log("1. Add an Item to Inventory 📦")
    console.log("2. View Inventory 📋")
    console.log("3. Remove an Item from Inventory 🎲")
    console.log("4. Search for Item 🔎")
    console.log("5. Exit ‼️")


    //CLOSING THE LOOP
    reRun = prompt("🛍️ Would you like to make to make another transaction? (yes/no): ");
}

console.log("========= ⛳️ THANK YOU FOR TRYING MY INVENTORY TRACKER 🎲 ============")