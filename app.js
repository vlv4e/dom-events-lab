/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*----------------------------- Variables -----------------------------*/
let input = ""; // this is for the user input y3ny hay ely byn7sb
let operationType = ""; // + or - or x or /
let total = 0; // input (operationType) input = total


/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (!isNaN(value) || value === "0") { // isNaN 7g ntakd ena mo number so we can calulate 
        input += value;
        display.textContent = input;
    } else if (value === "C") { // C for clear
        input = "";
        total = 0;
        operationType = "";
        display.textContent = "";
    } else if (value === "=") {
        eq();
    } else {
      doOperation(value);
    }
});
/*-------------------------------- Functions --------------------------------*/
// how to change string to number????????? PARSE remember parsel lol (same ely in aws queries)
function eq() {
    const inputNum = parseFloat(input); // parseNum(input)
    if (operationType === "+") {
      total += inputNum;
    } else if (operationType === "-") {
      total -= inputNum;
    }
    display.textContent = total;
    input = "";
    operationType = "";
}

function doOperation(op) {
    if (input !== "") {
        if (total === 0) {
          total = parseFloat(input);
        } else {
            const inputNum = parseFloat(input);
            if (operationType === "+") {
              total += inputNum;
            } else if (operationType === "-") {
              total -= inputNum;
            }
        }
        operationType = op;
        display.textContent = total;
        input = "";
    }
}