const prompt = require("prompt-sync")();

console.log("====== 🎰 WELCOME TO MY MINI INVENTORY📦 TRACKER 🐝 ======")
let inventoryArray = [];
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
            if(inventoryArray.length > 0){
                console.log("====== 🎮 Inventory List 🛍️ ======");
                inventoryArray.forEach((item, index) => {
                    console.log(`🐝 Item Number: ${index}`)
                    console.log(`🎲 Item Name: ${item.productName}`)
                    console.log(`🎮 Item Quantity: ${item.productQuantity}`)
                    console.log(`👾 Item Price: R${item.productPrice}`)
                    console.log(`🎰 Total: ${item.productTotal}`)
                    console.log("============== ‼️ ======================")
                })
            } else{
                console.log("🚫 Inventory Is currently Empty🙂‍↔️, no stress, time to add more stuff😃");
            }
            break;
            //END OF CASE 1

        case "2":
            let itemName = prompt("📦 Enter the name of the product: ").toLowerCase();
            let itemQuantity = parseInt(prompt("🧩 How many products do you want to add?: "));
            let itemPrice = parseFloat(prompt("🐝 How is each item (R): "));
            let totalPrice = itemQuantity * itemPrice;

            let product = {
                itemIndex: index,
                productName: itemName,
                productQuantity: itemQuantity,
                productPrice: itemPrice,
                productTotal: totalPrice
            }

            inventoryArray.push(product)
            console.log(`✅ You have successfuly Added ${itemName} to inventory 📦`)

        //END OF CASE 2
        
        case "3":
            let removeItem = prompt("⛳️ Enter the name of the item you want to remove: ").toLowerCase();

            //REMOVING ITEM FROM THE LIST
            let index = inventoryArray.findIndex(items => items.productName === removeItem);
            if(index !== -1){
                inventoryArray.splice(index, 1)
                console.log(inventoryArray)
            }
    

        //DEFAULT CASE
        default:
            break;
    }

    //CLOSING THE LOOP
    reRun = prompt("🛍️ Would you like to make to make another transaction? (yes/no): ").toLowerCase();
}

console.log("========= ⛳️ THANK YOU FOR TRYING MY INVENTORY TRACKER 🎲 ============")