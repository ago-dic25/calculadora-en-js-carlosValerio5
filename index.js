const historyList = document.querySelector('.history-list');
const resultDisplay = document.querySelector('.result');
const numberFields = document.querySelectorAll('.number-field');
const addBtn = document.querySelector('.add-btn');
const subtractBtn = document.querySelector('.subtract-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const divideBtn = document.querySelector('.divide-btn');
const cleanBtn = document.querySelector('.clean');

cleanBtn.addEventListener('click', () => {
    numberFields.forEach(field => field.value = '');
    resultDisplay.textContent = '0';
    historyList.innerHTML = '';
});

function getNumbers() {
    const num1 = parseFloat(numberFields[0].value);
    const num2 = parseFloat(numberFields[1].value);
    if (isNaN(num1) || isNaN(num2)) {
        updateResult('Error: Invalid input');
        throw new Error('Invalid input');
    }
    return [num1, num2];
}

function updateResult(value) {
    resultDisplay.textContent = `${value}`;
}

function add() {
    const [num1, num2] = getNumbers();
    const result = num1 + num2;
    updateResult(result);
    addToHistory(`${num1} + ${num2} = ${result}`);
}

function subtract() {
    const [num1, num2] = getNumbers();
    const result = num1 - num2;
    updateResult(result);
    addToHistory(`${num1} - ${num2} = ${result}`);
}

function multiply() {
    const [num1, num2] = getNumbers();
    const result = num1 * num2;
    updateResult(result);
    addToHistory(`${num1} x ${num2} = ${result}`);
}

function divide() {
    const [num1, num2] = getNumbers();
    if (num2 === 0) {
        updateResult('Error: Division by zero');
        return;
    }
    const result = num1 / num2;
    updateResult(result);
    addToHistory(`${num1} / ${num2} = ${result}`);
}

function addToHistory(entry) {
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);