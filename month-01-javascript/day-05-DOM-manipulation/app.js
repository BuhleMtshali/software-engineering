//DEFINING VARIABLES
let formInput = document.querySelector("#search-input");
let form = document.querySelector("#form");
let listWrapper = document.querySelector("#list-wrapper");
let list = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    list.push(formInput.value);
    formInput.value = "";
    addToList(list);
});


//FUNCTION FOR LOGGING THE LIST
function addToList(array){
    console.log(array)
    let htmlMarkup = '';
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

    listWrapper.innerHTML = htmlMarkup;
}