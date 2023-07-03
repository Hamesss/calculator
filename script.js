let a = 0;
let b = 0;
let operation = "";

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
