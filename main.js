function add (n1, n2) {
    return n1 + n2
}
function subtract (n1, n2) {
    return n1 - n2
}
function multiply (n1, n2) {
    return n1 * n2
}
function divide (n1, n2) {
    return n1 / n2
}

function operate() {
    let n1 = parseInt(prompt ("enter first number"))
    let operator = prompt ("enter operator")
    let n2 = parseInt(prompt ("enter second number"))
    if (operator === '+') {
        return add(n1, n2)
    } else if (operator === '-') {
        return subtract(n1, n2)
    } else if (operator === '*') {
        return multiply(n1, n2)
    } else if (operator === '/') {
        return divide(n1, n2)
    } else {
        operator = prompt ("enter operator again")
    }
 
}

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    let n1
    let operator 
    if (button.className === 'calcBtn number') {
        n1 = parseInt(button.id)
        console.log(n1)
        display.textContent = `${button.id}`
        return n1
    } else if (button.className === 'calcBtn operator') {
        operator = button.id
        console.log(operator)
        return operator
    } ;
    

  });
});

