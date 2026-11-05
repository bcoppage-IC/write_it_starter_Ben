import {ask} from './io.js';

export function cleanNumber(number)
{
    let cleanNumber = String(number).trim();
    if (cleanNumber === '') return false;
    cleanNumber = Number(cleanNumber);
    if (!Number.isFinite(cleanNumber)) return false;
    return cleanNumber;
}

export function finalAnswer(number1, number2, operator)
{   
    switch  (operator) {
        case '+': return (number1 + number2);
        case '-': return (number1 - number2);
        case '*': return (number1 * number2);
        case '/': return number2 === 0 ? null : number1 / number2;
        default : return null;
    }
}
let number1 = ask ('What is the first number?');
let operator = ask ('What is the operator?');
let number2 = ask ('What is the next number?');

number1 = cleanNumber(number1);
number2 = cleanNumber(number2);

let result = finalAnswer(number1, number2, operator);

console.log('Result = ' + result);
