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
    plusMinus.disabled = false;

    let num1Num;
    let num2Num;
    
    if (num1.includes(".")) {
        num1Num = parseFloat(num1);
        console.log(`Num1 in float is: ${num1Num}`);
    } else {
        num1Num = parseInt(num1);
        console.log(`Num1 in integer is: ${num1Num}`);
    }
    
    if (num2.includes(".")) {
        num2Num = parseFloat(num2);
        console.log(`Num2 in float is: ${num2Num}`);
    } else {
        num2Num = parseInt(num2);
        console.log(`Num2 in integer is: ${num2Num}`);
    }
    
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
    displayValue.textContent = result.toFixed(2);
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "1";
            displayValue.textContent += "1";
            break;

        case displayValue.textContent === "0."
        && num2Check === true:
            num2 += "1";
            displayValue.textContent += "1";
            break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "1";
            num2 = ""; // Set num2 to 0
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
            num2 +=  "2";
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "2";
            displayValue.textContent += "2";
            break;

        case displayValue.textContent === "0."
        && num2Check === true:
            num2 +=  "2";
            displayValue.textContent += "2";
            break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "2";
            num2 = ""; // Set num2 to 0
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
                num1 = "2";
                displayValue.textContent = "2";
                clearDisplay = false;
            } else {
                num1 += "2";
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
        case displayValue.textContent === "0."
            && num2Check === false:
            num1 += "3";
            displayValue.textContent += "3";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "3";
                displayValue.textContent += "3";
                break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "3";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "4";
            displayValue.textContent += "4";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "4";
                displayValue.textContent += "4";
                break;



        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "4";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "5";
            displayValue.textContent += "5";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "5";
                displayValue.textContent += "5";
                break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "5";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "6";
            displayValue.textContent += "6";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "6";
                displayValue.textContent += "6";
                break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "6";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "7";
            displayValue.textContent += "7";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "7";
                displayValue.textContent += "7";
                break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "7";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "8";
            displayValue.textContent += "8";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "8";
                displayValue.textContent += "8";
                break;

        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "8";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "9";
            displayValue.textContent += "9";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "9";
                displayValue.textContent += "1";
                break;


        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "9";
            num2 = ""; // Set num2 to 0
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
        case displayValue.textContent === "0."
        && num2Check === false:
            num1 += "0";
            displayValue.textContent += "0";
            break;

            case displayValue.textContent === "0."
            && num2Check === true:
                num2 +=  "0";
                displayValue.textContent += "0";
                break;


        case operateCheck === true && operatorCheck === false:
            operateCheck = false;
            result = 0; // Restart the result
            num1 = "0";
            num2 = ""; // Set num2 to 0
            displayValue.textContent = "0";
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


const keypadButtons = document.querySelectorAll('button');
keypadButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(`KEYPRESS: ${btn.textContent}`)
      console.log(`num1 is: ${num1}`);
      console.log(`num2 is: ${num2}`);
      console.log(`num2Check is: ${num2Check}`)
      console.log(`operatorCheck is: ${operatorCheck}`)
      console.log(`operateCheck is: ${operateCheck}`)
      
    })
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
    num1 = "";
    num2 = "";
    operator = "";
    displayValue.textContent = "0";
    plusMinus.disabled = false;
});

plusMinus.disabled = false;

plusMinus.addEventListener('click', () => {
    if (num1 && !num2Check) {
        if (operateCheck) {
            num1 = result.toString();
            operateCheck = false; // Reset operateCheck
        }
        num1 = toggleSign(num1);
        displayValue.textContent = num1;
    } else if (num2 && num2Check) {
        num2 = toggleSign(num2);
        displayValue.textContent = num2;
    }
});

function toggleSign(number) {
    if (number.includes("-")) {
        return number.slice(1);
    } else {
        return `-${number}`;
    }
}


let operatorCheck = false;

plus.addEventListener('click', () => {
    num1 = displayValue.textContent;
    operator = "+";
    plus.classList.add('operator-clicked');
    num2Check = true;
    plusMinus.disabled = false;
    clearDisplay = true;
    operatorCheck = true;
//in progress
    // if (num1 && num2 && operatorCheck){
    //     console.log(`num1: ${num1}`);
    //     console.log(`num2: ${num2}`);
    //     console.log(`operatorCheck: ${operatorCheck}`)
    //     operate();
    // }
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
    if (operateCheck === true && num2Check === false){
        num1 = "0.";
        displayValue.textContent = "0.";
    }

    if (displayValue.textContent === "0" && num2Check === false && operateCheck === false){
        num1 += "."
        displayValue.textContent += ".";
        console.log ("I added . to num1 because it doesn't have one")
    }

    if (!num1.includes(".")){
        num1 += ".";
        console.log ("I added . to num1 because it doesn't have one")
        displayValue.textContent += ".";
    }
    else {
        num1 = num1;
    }


    if (num2 && !num2.includes(".") && num2Check === true && operateCheck === false){
        num2 += ".";
        displayValue.textContent += ".";
        console.log ("I added . to num1 because it doesn't have one")
    }
    else if (num2Check && operatorCheck && operateCheck && clearDisplay){
        num2 = "0."
        displayValue.textContent = "0.";
    }
    else if (num2Check && operatorCheck && operateCheck){
        num2 += ".";
        displayValue.textContent += ".";
    }
   
    else if (num2Check && !operateCheck && !num2 && operatorCheck){
        num2 = "0."
        displayValue.textContent = "0.";
    }
    else {
        num2 = num2;
    }
});

equals.addEventListener('click', function() {
    operate(num1, operator, num2);
});