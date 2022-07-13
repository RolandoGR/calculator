let n1 = 0
let operator = '' 
let n2 = 0
let result = 0
let log = []
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button');

function add (n1,n2) {
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

function reset() {
    n1 = 0 
    operator = '' 
    n2 = 0
    result = 0
    log = []
    display.textContent = `${n1}`
    return
}

function equal() {
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    console.log(n1, n2, operator, log)
    operate(n1, n2, operator)
    
    display.textContent = `${result}`
    n1 = result
    n2 = 0
    return
}


function setNumber(n, button) {
        if (n === 0) {
            display.textContent = `${button.id}`
            n = button.id
        } else {  
            display.textContent += `${button.id}`
            n += button.id
        }

 
        console.log('Number introduced: ', n)
        return n
    }


function setOperator(button) {
        display.textContent += `${button.id}`
        operator = button.id
        return operator
}

function operate(n1, n2, operator) {
    if (operator === '+') {
        result = add(n1, n2)
    } else if (operator === '-') {
        result = subtract(n1, n2)
    } else if (operator === '*') {
        result = multiply(n1, n2)
    } else if (operator === '/') {
        result = divide(n1, n2)
    } else {
        return
    }
    display.textContent = `${result}` 
    return result   
}




buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'c') {
        reset()
    }
    
    if (button.id === 'equal') {
        equal()
        return
    }
    
    if (button.className === 'calcBtn number' || button.className === 'calcBtn number zero') {
        if (log[log.length -1] === '+' ||
        log[log.length -1] === '-' ||
        log[log.length -1] === '*' ||
        log[log.length -1] === '/')  {
            n2 = setNumber(n2, button)
        } else {
            n1 = setNumber(n1, button)

        }
    } 
    
    if (button.className === 'calcBtn operator') {
        operator = setOperator(button) 
        }   
    
    log.push(button.id)
    console.log(log)
  });
});

