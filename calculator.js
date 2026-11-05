import {ask} from './io.js';

let number1 = ask ('What is the first number?');
let operator = ask ('What is the operator?');
let number2 = ask ('What is the next number?');

let result = eval(number1 + operator + number2);

console.log(result);
