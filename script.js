const add = function(num1Num, num2Num) {
    return num1Num + num2Num;
};
  
const subtract = function(num1Num, num2Num) {
  return num1Num - num2Num;
};

const multiply = function(num1Num, num2Num) {
    return num1Num * num2Num;
}

const divide = function(num1Num, num2Num){
    return num1Num / num2Num;
}

const remainder = function(num1Num, num2Num){
    return num1Num % num2Num;
}

let num1 = 0;
let operator = "";
let num2 = 0;
let num2Check = false;
let operateCheck;

const operate = function(num1, operator, num2){
    operateCheck = false;

    let num1Num = Number(num1);
    let num2Num = Number(num2);

    console.log(num1Num);
    console.log(num2Num);

    if (operator === "+"){
        result = add(num1Num, num2Num);
    }
    else if (operator === "-"){
        result = subtract(num1Num, num2Num);
    }
    
    else if (operator === "x"){
        result = multiply(num1Num, num2Num);
    }
    
    else if (operator === "/"){
        result = divide(num1Num, num2Num);
    }
    
    else if (operator === "%"){
        result = remainder(num1Num, num2Num);
    }
    console.log(result);
    displayValue.textContent = result;
    return result;
    operateCheck = true;
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

number1.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "1";
        displayValue.textContent = "1";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "1";
            displayValue.textContent = "1";
            clearDisplay = false;
        } else {
            num1 += "1";
            displayValue.textContent += "1";
        }
    }
    else if (num2Check === true) {
        num2 += "1";
        displayValue.textContent += "1";
    }
    
});

number2.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "2";
        displayValue.textContent = "2";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "2";
            displayValue.textContent = "2";
            clearDisplay = false;
        } else {
            num1 += "2";
            displayValue.textContent += "2";
        }
    } else if (num2Check === true) {
        num2 += "2";
        displayValue.textContent += "2";
    }
});

number3.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "3"; // Update num2 directly
        displayValue.textContent = "3";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "3"; // Update num1 directly
            displayValue.textContent = "3";
            clearDisplay = false;
        } else {
            num1 += "3"; // Update num1 directly
            displayValue.textContent += "3";
        }
    } else if (num2Check === true) {
        num2 += "3"; // Update num2 directly
        displayValue.textContent += "3";
    }
});
number4.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "4"; // Update num2 directly
        displayValue.textContent = "4";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "4"; // Update num1 directly
            displayValue.textContent = "4";
            clearDisplay = false;
        } else {
            num1 += "4"; // Update num1 directly
            displayValue.textContent += "4";
        }
    } else if (num2Check === true) {
        num2 += "4"; // Update num2 directly
        displayValue.textContent += "4";
    }
});
number5.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "5"; // Update num2 directly
        displayValue.textContent = "5";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "5"; // Update num1 directly
            displayValue.textContent = "5";
            clearDisplay = false;
        } else {
            num1 += "5"; // Update num1 directly
            displayValue.textContent += "5";
        }
    } else if (num2Check === true) {
        num2 += "5"; // Update num2 directly
        displayValue.textContent += "5";
    }
});
number6.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "6"; // Update num2 directly
        displayValue.textContent = "6";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "6"; // Update num1 directly
            displayValue.textContent = "6";
            clearDisplay = false;
        } else {
            num1 += "6"; // Update num1 directly
            displayValue.textContent += "6";
        }
    } else if (num2Check === true) {
        num2 += "6"; // Update num2 directly
        displayValue.textContent += "6";
    }
});
number7.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "7"; // Update num2 directly
        displayValue.textContent = "7";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "7"; // Update num1 directly
            displayValue.textContent = "7";
            clearDisplay = false;
        } else {
            num1 += "7"; // Update num1 directly
            displayValue.textContent += "7";
        }
    } else if (num2Check === true) {
        num2 += "7"; // Update num2 directly
        displayValue.textContent += "7";
    }
});
number8.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "8"; // Update num2 directly
        displayValue.textContent = "8";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "8"; // Update num1 directly
            displayValue.textContent = "8";
            clearDisplay = false;
        } else {
            num1 += "8"; // Update num1 directly
            displayValue.textContent += "8";
        }
    } else if (num2Check === true) {
        num2 += "8"; // Update num2 directly
        displayValue.textContent += "8";
    }
});
number9.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "9"; // Update num2 directly
        displayValue.textContent = "9";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "9"; // Update num1 directly
            displayValue.textContent = "9";
            clearDisplay = false;
        } else {
            num1 += "9"; // Update num1 directly
            displayValue.textContent += "9";
        }
    } else if (num2Check === true) {
        num2 += "9"; // Update num2 directly
        displayValue.textContent += "9";
    }
});
number0.addEventListener('click', function() {
    if (operateCheck === true){
        num1 = result;
    }
    if (num2Check === true && clearDisplay === true) {
        num2 = "0"; // Update num2 directly
        displayValue.textContent = "0";
        clearDisplay = false;
    } else if (num2Check === false) {
        num1 = displayValue.textContent;
        if (displayValue.textContent === "0" || clearDisplay === true) {
            num1 = "0"; // Update num1 directly
            displayValue.textContent = "0";
            clearDisplay = false;
        } else {
            num1 += "0"; // Update num1 directly
            displayValue.textContent += "0";
        }
    } else if (num2Check === true) {
        num2 += "0"; // Update num2 directly
        displayValue.textContent += "0";
    }
});

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const x = document.getElementById('x');
const divider = document.getElementById('divide');
const remainderr = document.getElementById('remainder'); //because divide and remainder are already declared as functions above, i gave them a bit different names
const AC = document.getElementById('AC');
const plusMinus = document.getElementById('plus-minus');
const equals = document.getElementById('equals');

let clearDisplay = false;

AC.addEventListener('click', () => {
    num2Check = false;
    num1 = 0;
    num2 = 0;
    operator = "";
    displayValue.textContent = "0";
});

plusMinus.addEventListener('click', () => {
    
});

plus.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "+";
    plus.classList.add('operator-clicked');
    num2Check = true;
    clearDisplay = true;
});

minus.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "-";
    minus.classList.add('operator-clicked');
    num2Check = true;
    clearDisplay = true;
});

x.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "x";
    x.classList.add('operator-clicked');
    num2Check = true;
    clearDisplay = true;
});

divider.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "/";
    divider.classList.add('operator-clicked');
    num2Check = true;
    clearDisplay = true;
});

remainderr.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "%";
    remainderr.classList.add('operator-clicked');
    num2Check = true;
    clearDisplay = true;
});

equals.addEventListener('click', function() {
    operate(num1, operator, num2);
});