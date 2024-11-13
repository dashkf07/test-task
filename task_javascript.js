const TARGET = 200;
const DIGITS = '9876543210';


function operationFromString(expression) {
    expression = expression.replace(/-/g, "+-");
    const res = expression.split('+').reduce((sum, num) => sum + parseInt(num, 10), 0);
    return res;
    
}

function getExpression(digits, expression = '', index = 0) {
    if (index === digits.length - 1) {
        if (operationFromString(expression + DIGITS[index]) == TARGET) {
            console.log(`выражение для получения ${TARGET}: ${expression + DIGITS[index]}`);
        }   
        return;
    }
    
    getExpression(DIGITS, expression + digits[index] + '', index + 1);
    getExpression(DIGITS, expression + digits[index] + '+', index + 1);
    getExpression(DIGITS, expression + digits[index] + '-', index + 1);
}

getExpression(DIGITS);