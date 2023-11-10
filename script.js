// global variables
const result_div = document.querySelector(".result")
let cpuChoice;
let inputValue;
// function to get random choice from computer
function cpuValue() {
    //               0          1       `2
    const values = ["ROCK", "PAPER", "SCISSORS"];
    let randomIndex = Math.floor(Math.random() * values.length) //why did I need to declare outside of function and initialize inside function?
    // ^ randomly grabs an index from the array
    // need to get the value of the index
    cpuChoice = values[randomIndex] //allows me to get the value of the index that was randomly selected
    return cpuChoice;
}

// create array of inputs from the page, for the user
const userInputs = document.getElementsByName("choice");
// function to get inputs value selected by user
function getUserValue() {
    for (i = 0; i < userInputs.length; i++) {     // use for loop to access each input elements in the array
        if (userInputs[i].checked == true) {    // check if the entire element (i) inside of the array (userInputs) is checked --> output <input type="radio" name="choice" id="SCISSORS" value="SCISSORS">
            inputValue = userInputs[i].value; // get value of input using method --> outputs value: PAPER, ROCK, or SCISSORS
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


//  logical function to determine the winner using cpuChoice and inputValue variables and if statements
function shoot() {
    getUserValue() // cannot define a function inside of a function but can call a function inside of another function
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





