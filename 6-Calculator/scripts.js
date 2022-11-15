const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const btn = document.querySelectorAll('.btn');

calculator.addEventListener('click', ({target: {className, textContent}}) => {
    let displayCurrentValue = display.textContent
    
    if(className === 'btn') {
        displayCurrentValue === '0' ? display.textContent = textContent : display.textContent += textContent
    }
    
    if(className === 'operator') {
        displayCurrentValue !== '0' && !displayCurrentValue.endsWith(textContent) && (display.textContent += textContent)
    }

    if(className === 'dot') {
        display.textContent += textContent
    }

    if(className === 'clear') {
        display.textContent = '0';
    }
    
    if(className === 'equal') {
        let result = displayCurrentValue.replaceAll('×', '*').replaceAll('÷', '/');
        result = eval(result)
        result = result.toString().length > 10 ? result.toFixed(10) : result
        display.textContent = result
    }
})