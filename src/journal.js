const button = document.getElementById("submit")
const input = document.getElementById("input")
const savedText = document.getElementById("saved")
const clearBtn = document.getElementById("clear")

function updateJournal(){
    let value = input.value;
    
    if(value!==null){
        savedText.innerText += `${value} \n`

    }
    else{
        savedText.innerHTML= ""     
    }
  


}
    
function clear(){
    savedText.innerHTML= ""
}

button.addEventListener("click", function(){
    
    updateJournal();
    
})

clearBtn.addEventListener("click", function(){
    clear();
})



