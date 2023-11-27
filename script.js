const result_div = document.querySelector(".result")
const userInputs = document.getElementsByName("choice");

let cpuChoice;
let inputValue;

function cpuValue() {
    const values = ["ROCK", "PAPER", "SCISSORS"];
    let randomIndex = Math.floor(Math.random() * values.length)
    cpuChoice = values[randomIndex] 
    return cpuChoice;
}

function getUserValue() {
    for (i = 0; i < userInputs.length; i++) {     
        if (userInputs[i].checked == true) {
            inputValue = userInputs[i].value; 
        }                                    
    }
}

function win() {
    result_div.innerHTML = `${inputValue}(you) beats ${cpuChoice}(CPU). You win!`
}

function lose() {
    result_div.innerHTML = `${cpuChoice}(CPU) beats ${inputValue}(you). You lose!`   
}

function tie() {
    result_div.innerHTML = `${inputValue}(you) is equal to ${cpuChoice}(CPU). It's a tie!`
}

function shoot() {
    getUserValue() 
    cpuValue()

    if(inputValue === cpuChoice) {
        tie()
    } else if (inputValue === "PAPER") {
        cpuChoice === "SCISSORS" ? lose() : win()  
    } else if(inputValue === "ROCK") {
        cpuChoice === "PAPER" ? lose() : win() 
    } else if (inputValue === "SCISSORS") {
        cpuChoice === "ROCK" ? lose() : win()
    }
}






