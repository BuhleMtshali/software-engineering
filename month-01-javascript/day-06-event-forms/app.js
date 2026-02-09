//GETIING ALL THE BUTTONS
const buttons = document.querySelectorAll(".rate-btn");

//SUBMITTING THE FORM
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const fullName = document.querySelector("#fullName");
    const email = document.querySelector("#emailAddress")
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        //FIRST I NEED TO REMOVE THE ACTIVE CLASS
        buttons.forEach((btn) => {
            btn.classList.remove("active")
        })

        //ADDING THE ACTIVE CLASS
        button.classList.add("active")

        //LOGGING THE VALUE OF THE BTN
        console.log("Selected value: ", button.dataset.value)
     })
    })
    
})