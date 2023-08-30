const add = function(num1, num2) {
    return num1 + num2;
};
  
const subtract = function(num1, num2) {
  return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2){
    return num1 / num2;;
}

const remainder = function(num1, num2){
    return num1 % num2;
}

let num1 = 0;
let operator = "";
let num2 = 0;

const operate = function(num1, operator, num2){
    if (operator == "+"){
        return add(num1, num2);
    }
    else if (operator == "-"){
        return subtract(num1, num2);
    }
    
    else if (operator == "x"){
        return multiply(num1, num2);
    }
    
    else if (operator == "/"){
        return divide(num1, num2);
    }
    
    else if (operator == "%"){
        return remainder(num1, num2);
    }

}

const displayValue = document.getElementById('display-value');

const numberButtons = document.querySelectorAll('.number');

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number0 = document.getElementById('number0');

let num2Check = false;

number1.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "1";
    } else {
        displayValue.textContent += "1";
    }
});
number2.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "2";
    } else {
        displayValue.textContent += "2";
    }
});
number3.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "3";
    } else {
        displayValue.textContent += "3";
    }
});
number4.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "4";
    } else {
        displayValue.textContent += "4";
    }
});
number5.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "5";
    } else {
        displayValue.textContent += "5";
    }
});
number6.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "6";
    } else {
        displayValue.textContent += "6";
    }
});
number7.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "7";
    } else {
        displayValue.textContent += "7";
    }
});
number8.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "8";
    } else {
        displayValue.textContent += "8";
    }
});
number9.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
    if (displayValue.textContent === "0") {
        displayValue.textContent = "9";
    } else {
        displayValue.textContent += "9";
    }
});
number0.addEventListener('click', function() {
    if (num2Check === true) {
        num2 = displayValue.textContent;
    } else {
        num1 = displayValue.textContent;
    }
     if (displayValue.textContent === "0") {
        displayValue.textContent = "0";
    } else {
        displayValue.textContent += "0";
    }
});

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const x = document.getElementById('x');
const divider = document.getElementById('divide');
const remainderr = document.getElementById('remainder'); //because divide and remainder are already declared as functions above
const AC = document.getElementById('AC');
const C = document.getElementById('C');
const equals = document.getElementById('equals');


AC.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    displayValue.textContent = "0";
});

C.addEventListener('click', () => {
    // Remove the last character and update displayValue
    displayValue.textContent = displayValue.textContent.slice(0, -1);
    if (displayValue.textContent === "") {
        displayValue.textContent = "0";
    }
});

plus.addEventListener('click', () => {
    num1 = displayValue.textContent;;
    operator = "+";
    displayValue.textContent += " + ";
    num2Check = true;
});

minus.addEventListener('click', () => {
    num1 = displayValue.textContent;;
    operator = "-";
    displayValue.textContent += " - ";
    num2Check = true;
});

x.addEventListener('click', () => {
    num1 = displayValue.textContent;;
    operator = "x";
    displayValue.textContent += " × ";
    num2Check = true;
});

divider.addEventListener('click', () => {
    num1 = displayValue.textContent;;
    operator = "/";
    displayValue.textContent += " ÷ ";
    num2Check = true;
});

remainderr.addEventListener('click', () => {
    num1 = displayValue.textContent;;
    operator = "%";
    displayValue.textContent += " % ";
    num2Check = true;
});

equals.addEventListener('click', () => {
    console.log(num1);
    console.log(num2);
});