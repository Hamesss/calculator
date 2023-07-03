let a = 0;
let b = 0;
let operation = "";
const btns = document.querySelectorAll("button");
const displayText = document.querySelector(".display-text")
btns.forEach(button => button.addEventListener("click", updateDisplay));
function updateDisplay(e){
    if (this.innerHTML == "Clear"){
        displayText.innerHTML = "";
    }
    else{
    displayText.innerHTML = this.innerHTML;
    }
}




function operate(operation, a, b){
    let result = 0;
    if (operation == "+"){
        result = add(a, b);
    }
    else if (operation == "-"){
        result = subtract(a, b);
    }
    else if (operation == "*"){
        result = multiply(a, b);
    }
    else if (operation == "/"){
        result = divide(a, b);
    }
    return result;
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}
