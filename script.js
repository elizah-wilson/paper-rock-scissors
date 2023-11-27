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
            inputValue = userInputs[i].value; // don't need return because the variable already exists outside the function and are reassigning it
        }                                     // return is kind of like an equal sign, gives a function value that can be used elsewhere by calling the function
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
        cpuChoice === "SCISSORS" ? lose() : win()  // ternary syntax - useful for binary outcomes
    } else if(inputValue === "ROCK") {
        cpuChoice === "PAPER" ? lose() : win() 
    } else if (inputValue === "SCISSORS") {
        cpuChoice === "ROCK" ? lose() : win()
    }
   
    // if(cpuChoice === inputValue) {
    //     tie()
    // } else if (cpuChoice === "PAPER") {
    //     if(inputValue === "ROCK") {
    //         lose()
    //     } else {
    //         win()
    //     }
    // } else if(cpuChoice === "ROCK") {
    //     if(inputValue === "SCISSORS") {
    //         lose()
    //     } else {
    //         win()
    //     }
    // } else if (cpuChoice === "SCISSORS") {
    //     if(inputValue === "PAPER") {
    //         lose()
    //     } else {
    //         win()
    //     }
    // }
 


 
    // if (cpuChoice === inputValue) {
    //     tie()
    // } else if ((cpuChoice === "PAPER") && (inputValue === "ROCK")) {
    //     lose()
    // } else if ((cpuChoice === "ROCK") && (inputValue === "SCISSORS")) {
    //     lose()
    // } else if ((cpuChoice === "SCISSORS") && (inputValue === "PAPER")) {
    //     lose()
    // } else if ((cpuChoice === "PAPER") && (inputValue === "SCISSORS")) {
    //     win()
    // } else if ((cpuChoice === "ROCK") && (inputValue === "PAPER")) {
    //     win()
    // }   else if ((cpuChoice === "SCISSORS") && (inputValue === "ROCK")) {
    //     win()
    // }
}


//CAN WE MAKE SWITCH WORK HERE?






