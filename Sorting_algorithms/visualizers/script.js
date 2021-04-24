let array = document.getElementById("array")
let textArray = array.textContent.split("")
let arrayLength= array.textContent.length
let i =1
let int 

let populateButton = document.getElementById("populate")


function populateArr(){
    for(let i =1; i<textArray.length; i+=2){
        if(i>1) textArray[i-1] = ", "
        textArray[i] = Math.floor((Math.random() * 100) + 1)
        array.textContent = textArray.join("")
        
    }

}

function populatePosition(){
    if(i>1) textArray[i-1] = ", "
    if(i<arrayLength){
        textArray[i] = Math.floor((Math.random() * 100) + 1)
    array.textContent = textArray.join("")
    i+=2
    }
    if (i==arrayLength){
        clearInterval(int)
        int = false
        i=1
    }
}

function populateInterval(){
    int = setInterval(populatePosition, 100)
}
populateButton.addEventListener("click", populateInterval)

