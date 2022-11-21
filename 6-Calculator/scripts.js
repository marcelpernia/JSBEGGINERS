const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const btn = document.querySelectorAll('.btn');

calculator.addEventListener('click', ({target: {className, textContent}}) => {
    let displayCurrentValue = display.textContent

    switch(className) {
        case 'btn':
            displayCurrentValue === '0' ? display.textContent = textContent : display.textContent += textContent    
            break;
        case 'operator':
            displayCurrentValue !== '0' && !displayCurrentValue.endsWith(textContent) && (display.textContent += textContent)
            break;
        case 'dot':
            !displayCurrentValue.endsWith(textContent) && (display.textContent += textContent)
            break;
        case 'clear':
            display.textContent = '0'
            break
        case 'plusminus':
            Math.sign(displayCurrentValue) === 1 ? display.textContent = 0 - displayCurrentValue : display.textContent = Math.abs(displayCurrentValue);
            break;
        case 'percent':
            display.textContent = displayCurrentValue / 100
            break;
        case 'equal':
            let result = displayCurrentValue.replaceAll('×', '*').replaceAll('÷', '/');
            result = eval(result)
            result = result.toString().length > 10 ? result.toFixed(10) : result
            display.textContent = result
            break;
    }
})