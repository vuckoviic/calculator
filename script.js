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

numberButtons.forEach(function(numberButton) {
    numberButton.addEventListener('click', function() {
        displayValue.textContent = "1";
        console.log("a");
});
});