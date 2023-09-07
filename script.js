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
let operateCheck = false;

const operate = function(num1, operator, num2) {

    if (displayValue.textContent === "0" && num2Check === false){
        num1 = "0";
    }
    else if (displayValue.textContent === "0" && num2Check === true){
        num2 = "0";
    }

    num2Check = false;

    let num1Num = Number(num1);
    let num2Num = Number(num2);

    console.log(num1Num);
    console.log(num2Num);

    if (operator === "+") {
        result = add(num1Num, num2Num);
    } else if (operator === "-") {
        result = subtract(num1Num, num2Num);
    } else if (operator === "x") {
        result = multiply(num1Num, num2Num);
    } else if (operator === "/") {
        if (num2Num === 0) {
            result = "NaN"; // Handle division by zero by setting result to "NaN"
        } else {
            result = divide(num1Num, num2Num);
        }
    } else if (operator === "%") {
        result = remainder(num1Num, num2Num);
    } else {
        // Handle unsupported operators or other cases here
        result = "NaN";
    }

    console.log(result);
    displayValue.textContent = result;
    operateCheck = true;
    operatorCheck = false;
    return result;
};


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

number1.addEventListener('click', function () {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "1";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "1";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "1";
            displayValue.textContent = "1";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "1";
                displayValue.textContent = "1";
                clearDisplay = false;
            } else {
                num1 += "1";
                displayValue.textContent += "1";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "1";
            displayValue.textContent += "1";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});



number2.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "2";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "2";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "2";
            displayValue.textContent = "2";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "1";
                displayValue.textContent = "2";
                clearDisplay = false;
            } else {
                num1 += "1";
                displayValue.textContent += "2";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "2";
            displayValue.textContent += "2";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});

number3.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "3";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "3";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "3";
            displayValue.textContent = "3";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "3";
                displayValue.textContent = "3";
                clearDisplay = false;
            } else {
                num1 += "3";
                displayValue.textContent += "3";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "3";
            displayValue.textContent += "3";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number4.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "4";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "4";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "4";
            displayValue.textContent = "4";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "4";
                displayValue.textContent = "4";
                clearDisplay = false;
            } else {
                num1 += "4";
                displayValue.textContent += "4";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "4";
            displayValue.textContent += "4";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number5.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "5";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "5";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "5";
            displayValue.textContent = "5";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "5";
                displayValue.textContent = "5";
                clearDisplay = false;
            } else {
                num1 += "5";
                displayValue.textContent += "5";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "5";
            displayValue.textContent += "5";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number6.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "6";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "6";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "6";
            displayValue.textContent = "6";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "6";
                displayValue.textContent = "6";
                clearDisplay = false;
            } else {
                num1 += "6";
                displayValue.textContent += "6";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "6";
            displayValue.textContent += "6";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number7.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "7";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "7";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "7";
            displayValue.textContent = "7";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "7";
                displayValue.textContent = "7";
                clearDisplay = false;
            } else {
                num1 += "7";
                displayValue.textContent += "7";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "7";
            displayValue.textContent += "7";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number8.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "8";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "8";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "8";
            displayValue.textContent = "8";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "8";
                displayValue.textContent = "8";
                clearDisplay = false;
            } else {
                num1 += "8";
                displayValue.textContent += "8";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "8";
            displayValue.textContent += "8";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number9.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "9";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "9";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "9";
            displayValue.textContent = "9";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "9";
                displayValue.textContent = "9";
                clearDisplay = false;
            } else {
                num1 += "9";
                displayValue.textContent += "9";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "9";
            displayValue.textContent += "9";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
    }
});
number0.addEventListener('click', function() {
    switch (true) {
        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "0";
            num2 = 0; // Set num2 to 0
            displayValue.textContent = "1";
            clearDisplay = false;
            console.log(num1);
            break;
        
        case num2Check === true && clearDisplay === true:
            num2 = "0";
            displayValue.textContent = "0";
            clearDisplay = false;
            console.log(num2);
            break;
        
        case num2Check === false:
            operateCheck = false; 
            num1 = displayValue.textContent;
            if (displayValue.textContent === "0" || clearDisplay === true) {
                num1 = "0";
                displayValue.textContent = "0";
                clearDisplay = false;
            } else {
                num1 += "0";
                displayValue.textContent += "0";
            }
            console.log(num1);
            break;
        
        case num2Check === true && operatorCheck === true:
            num2 += "0";
            displayValue.textContent += "0";
            console.log(num2);
            break;
        
        default:
            // Handle other cases if needed
            break;
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
const point = document.getElementById('point');

let clearDisplay = false;

AC.addEventListener('click', () => {
    num2Check = false;
    operateCheck = false;
    num1 = 0;
    num2 = 0;
    operator = "";
    displayValue.textContent = "0";
});

plusMinus.disabled = false;

plusMinus.addEventListener('click', () => {
    plusMinus.disabled = false;

    if (displayValue.textContent !== "0"){
        displayValue.textContent = `${"-"}${displayValue.textContent}`;
        plusMinus.disabled = true;
    }
            if (displayValue.textContent == num1){
                num1 = `${"-"}${num1}`;
                plusMinus.disabled = true;
            }
            else if (displayValue.textContent === "" || displayValue.textContent === "0"){
                num1 = num1;
                num2 = num2;
            }

            else{
                num2 = `${"-"}${num2}`;
                plusMinus.disabled = true;
            }
            console.log(plusMinus.disabled);
});

let operatorCheck = false;

plus.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "+";
    plus.classList.add('operator-clicked');
    num2Check = true;
    plusMinus.disabled = false;
    clearDisplay = true;
    operatorCheck = true;
});

minus.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "-";
    minus.classList.add('operator-clicked');
    num2Check = true;
    plusMinus.disabled = false;
    clearDisplay = true;
    operatorCheck = true;
});

x.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "x";
    x.classList.add('operator-clicked');
    num2Check = true;
    plusMinus.disabled = false;
    clearDisplay = true;
    operatorCheck = true;
});

divider.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "/";
    divider.classList.add('operator-clicked');
    num2Check = true;
    plusMinus.disabled = false;
    clearDisplay = true;
    operatorCheck = true;
});

remainderr.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "%";
    remainderr.classList.add('operator-clicked');
    num2Check = true;
    plusMinus.disabled = false;
    clearDisplay = true;
    operatorCheck = true;
});

point.addEventListener('click', () => {

})

equals.addEventListener('click', function() {
    operate(num1, operator, num2);
});