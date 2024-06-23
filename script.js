let displayElement = document.getElementById('display');
let currentInput = '';
let shouldResetDisplay = false;

function clearDisplay() {
    currentInput = '';
    displayElement.textContent = '0';
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        displayElement.textContent = currentInput || '0';
    }
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    displayElement.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentInput += operator;
        displayElement.textContent = currentInput;
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        displayElement.textContent = currentInput;
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        displayElement.textContent = currentInput;
        shouldResetDisplay = true;
    } catch {
        displayElement.textContent = 'Error';
        shouldResetDisplay = true;
    }
}
