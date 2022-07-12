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

let n1 
let operator 
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    while (button.className === 'calcBtn number') {
        console.log(typeof(n1))
        if (typeof(n1) === 'undefined') {
            display.textContent = `${button.id}`
            n1 = button.id
        } else {
            display.textContent += `${button.id}`
            n1 += button.id
        }
        console.log(n1)
        return n1
    } 
    
    if (button.className === 'calcBtn operator') {
        operator = button.id
        console.log(operator)
        return operator
    } ;
    

  });
});

