const add = function(a, b) {
    return a + b;
};
  
const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const remainder = function(a, b){
    return a % b;
}

let num1 = 0;
let operator = "";
let num2 = 0;

const operate = function(num1, opeator, num2){

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
    displayValue.textContent += "1";
});
number2.addEventListener('click', function() {
    displayValue.textContent += "2";
});
number3.addEventListener('click', function() {
    displayValue.textContent += "3";
});
number4.addEventListener('click', function() {
    displayValue.textContent += "4";
});
number5.addEventListener('click', function() {
    displayValue.textContent += "5";
});
number6.addEventListener('click', function() {
    displayValue.textContent += "6";
});
number7.addEventListener('click', function() {
    displayValue.textContent += "7";
});
number8.addEventListener('click', function() {
    displayValue.textContent += "8";
});
number9.addEventListener('click', function() {
    displayValue.textContent += "9";
});
number0.addEventListener('click', function() {
    displayValue.textContent += "0";
});

