let firstValue = undefined;
let secondValue = "";
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
        
            if (previousInput == "secondNumber"){
                displayText.innerHTML = operate(operation, firstValue, secondValue);
                firstValue = operate(operation, firstValue, secondValue);
                operation = this.innerHTML;
            }
            else if (previousInput == "firstNumber" || previousInput == "equal"){
            displayText.innerHTML = this.innerHTML;
            operation = this.innerHTML;
            }
            
            previousInput = "Operation";
            secondValue = "";
    }
    //If user presses equal sign
    else if (this.innerHTML == "="){
        secondValue = displayText.innerHTML;
        previousInput = "equal";
        displayText.innerHTML = operate(operation, firstValue, secondValue);
        firstValue = displayText.innerHTML;
        secondValue = "";
    }

    //If user clicks a number
    else {
        if (previousInput == "Operation") {
            if(!isNaN(this.innerHTML) || this.innerHTML == "."){
            displayText.innerHTMl = "";
            secondValue += this.innerHTML; //second number
            displayText.innerHTML = secondValue;
            }
            else{
            previousInput = "secondNumber";
            }
        }
        else{ //issue is because this runs after the first number (idk how to fix)
            displayText.innerHTML += this.innerHTML;
            firstValue = displayText.innerHTML;
            previousInput = "firstNumber";
        }
        
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
    return parseInt(a) + parseInt(b);
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
