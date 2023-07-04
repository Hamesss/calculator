let firstValue = 0;
let secondValue = 0;
let operation = "";
let previousInput = "";
const btns = document.querySelectorAll("button");
const displayText = document.querySelector(".display-text")
btns.forEach(button => button.addEventListener("click", updateDisplay));
btns.forEach(button => button.addEventListener("click", storeValue));

function updateDisplay(e) {
    if (this.innerHTML == "Clear") {
        displayText.innerHTML = "";
    }
    //If user uses a math expression
    else if (!!this.innerHTML.match(/^[+\-*/]/)) {
        firstValue = displayText.innerHTML;
        displayText.innerHTML = this.innerHTML;
        previousInput = "Operation";
        operation = this.innerHTML;
    }
    //If user presses equal sign
    else if (this.innerHTML == "="){
        secondValue = displayText.innerHTML;
        displayText.innerHTML = operate(operation, firstValue, secondValue);
    }

    //If user clicks a number
    else {
        if (previousInput == "Operation") {
            displayText.innerHTML = this.innerHTML;
        }
        else {
            displayText.innerHTML += this.innerHTML;
        }
        previousInput = "Number";
    }
}

function storeValue(e) { }

//Choose which operation to do
function operate(operation, a, b) {
    let result = 0;
    if (operation == "+") {
        result = add(a, b);
    }
    else if (operation == "-") {
        result = subtract(a, b);
    }
    else if (operation == "*") {
        result = multiply(a, b);
    }
    else if (operation == "/") {
        result = divide(a, b);
    }
    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round((a / b) * 1000) / 1000 // Rounds to 3 decimals
}
