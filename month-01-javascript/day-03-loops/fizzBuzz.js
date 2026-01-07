const prompt = require("prompt-sync")();

console.log("===== 👾 Welcome to My Mini FizzBuzz Game 🎮 =====");

setTimeout(() => {
    fizzBuzz()
}, 2000);

function fizzBuzz(){
    let maxIterator = parseInt(prompt("Enter your Max Iterator🎮: "))

    for(let i = 0; i <= maxIterator; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log("🎊FizzBuzz!!!!🎰")
        } else if()
    }
    
}