// Step 1: Define functions for arithmetic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Step 2: Function to handle calculation
function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Invalid operation";
    }
}

// Step 3: Get user inputs
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (add, subtract, multiply, divide):");

// Step 4: Perform calculation
const result = calculate(operation, firstNumber, secondNumber);

// Step 5: Display the result
alert(`Result: ${result}`);