//DEFINING VARIABLES
let formInput = document.querySelector("#search-input");
let form = document.querySelector("#form");
let listWrapper = document.querySelector("#list-wrapper");
let clearBtn = document.querySelector("#delete-btn")
let list = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(formInput.value.length > 2){
        list.push(formInput.value);
        formInput.value = "";
        addToList(list);
    } else{
        alert("Please enter something first!")
    }
    
});


//FUNCTION FOR LOGGING THE LIST
function addToList(array){
    console.log(array)
    let htmlMarkup = '';
    if(array.length > 0){
        array.forEach((item) => {
        htmlMarkup += `
                <label class="notebook-checkbox">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="text">
                    <span class="text-content">${item}</span>
                    <svg preserveAspectRatio="none" viewBox="0 0 400 20" class="cut-line">
                    <path d="M0,10 H400"></path>
                    </svg>
                    </span>
                </label>

                <svg height="0" width="0">
                    <filter id="handDrawnNoise">
                    <feTurbulence
                    result="noise"
                    numOctaves="8"
                    baseFrequency="0.1"
                    type="fractalNoise"
                    ></feTurbulence>
                    <feDisplacementMap
                    yChannelSelector="G"
                    xChannelSelector="R"
                    scale="3"
                    in2="noise"
                    in="SourceGraphic"
                    ></feDisplacementMap>
                    </filter>
                </svg>
                `
    })
    } else{
        alert("Please Enter items to the list")
    }
    

    listWrapper.innerHTML = htmlMarkup;
}

clearBtn.addEventListener("click", () => {
    listWrapper.innerHTML = ''
})