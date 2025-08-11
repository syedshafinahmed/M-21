function multiply(num1, num2){
    if(typeof num1 !== 'number'){
        return "Please Provide numebrs.";
    }
    else if(typeof num2 !== 'number'){
        return "Please Provide numebrs.";
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, 'seven');
console.log(result);