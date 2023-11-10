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

    if ((cpuChoice === "PAPER") && (inputValue === "PAPER")) {
        tie()
    } else if ((cpuChoice === "SCISSORS") && (inputValue === "SCISSORS")) {
        tie()
    } else if ((cpuChoice === "ROCK") && (inputValue === "ROCK")) {
        tie()
    } else if ((cpuChoice === "PAPER") && (inputValue === "ROCK")) {
        lose()
    } else if ((cpuChoice === "ROCK") && (inputValue === "SCISSORS")) {
        lose()
    } else if ((cpuChoice === "SCISSORS") && (inputValue === "PAPER")) {
        lose()
    } else if ((cpuChoice === "PAPER") && (inputValue === "SCISSORS")) {
        win()
    } else if ((cpuChoice === "ROCK") && (inputValue === "PAPER")) {
        win()
    }   else if ((cpuChoice === "SCISSORS") && (inputValue === "ROCK")) {
        win()
    } 
}






