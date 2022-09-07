const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons');
const deleteBtn = document.querySelector('.delete');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal');
let displayValue = '';
let firstValue = '';
let currentOperator = '';


//for each button clicked change the text content to match that
buttons.forEach((button) => button.addEventListener('click', function(e){
    numberClicked(e.target.textContent);
    display.textContent = displayValue;
}));

//keep track of the numbers clicked
function numberClicked(num){
    if(displayValue.length <= 9){
    displayValue += num;
    }
}
//for each operator clicked change the text content to match that
operators.forEach((operator) => operator.addEventListener('click', function(e){
    opClicked(e.target.textContent);
    display.textContent = currentOperator;
}));

//keep track of operator clicked and first value clicked
function opClicked(operator){
    firstValue= displayValue;
    currentOperator = operator;
    displayValue = ''; 
}

//do the math

equal.addEventListener('click', function(){
    calculation();
    display.textContent = firstValue;
})

//calculate function. Probably could add it inside equal but ehh.
function calculation(){
    firstValue = parseFloat(firstValue);
    displayValue = parseFloat(displayValue);
    if(firstValue != '' && displayValue != ""){
        if(currentOperator === "+"){
            firstValue += displayValue;
        }
        else if(currentOperator === '-'){
            firstValue -= displayValue;
        }
        else if(currentOperator === 'x'){
            firstValue *= displayValue;
        }
        else if(currentOperator === '÷'){
            firstValue /= displayValue;
        }  
    }
}

//clears the screen
deleteBtn.addEventListener('click', () => {
    firstValue= '';
    operator = '';
    displayValue= '';
    display.textContent ='';
})



