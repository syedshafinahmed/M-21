function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        return add(a, b);
    }
    else if (operation === 'subtract') {
        return subtract(a, b);
    }
    else if (operation === 'multiply') {
        return multiply(a, b);
    }
    else if (operation === 'division') {
        return division(a, b);
    }
    else {
        return "Only 'add', 'subtract', 'multiply', 'division' is allowed."
    }
}
const result = calculator(5, 7, 'division');
console.log(result);