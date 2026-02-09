//GETIING ALL THE BUTTONS
const buttons = document.querySelectorAll(".rate-btn");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
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


//SUBMITTING THE FORM
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("i submitted the form")
})