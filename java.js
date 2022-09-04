const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (operator, num1, num2){
    if(operator === '+'){
        return add(num1,num2);
    }
    else if(operator === '-'){
        return subtract(num1, num2);
    }
    else if(operator === '*'){
        return multiply(num1, num2);
    }
    else if(operator === '/') {
        return divide(num1,num2);
    }
}

console.log(buttons);

/*buttons.addEventListener('click',{

})*/
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        document.createTextNode(buttons[i]);
        display.appendChild(buttons);
    })
}