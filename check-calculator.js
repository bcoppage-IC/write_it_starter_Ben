// check-calculator.js: checks the functions you wrote in calculator.js.
// Run with: node check-calculator.js
// FAIL means your function gave a different answer than expected. TODO means it is not written or not exported yet.
import * as calc from './calculator.js';

let fails = 0;
let todos = 0;

function has(name) {
  if (typeof calc[name] === 'function') return true;
  console.log(`TODO  ${name} is not written or not exported yet`);
  todos++;
  return false;
}

function check(label, actual, expected) {
  const ok = Object.is(actual, expected);
  if (!ok) fails++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  (got ${String(actual)}, wanted ${String(expected)})`);
}

if (has('isValidNumber')) {
  check("isValidNumber('12')", calc.isValidNumber('12'), true);
  check("isValidNumber('-3.5')", calc.isValidNumber('-3.5'), true);
  check("isValidNumber('0')", calc.isValidNumber('0'), true);
  check("isValidNumber(' 7 ')", calc.isValidNumber(' 7 '), true);
  check("isValidNumber('')", calc.isValidNumber(''), false);
  check("isValidNumber('   ')", calc.isValidNumber('   '), false);
  check("isValidNumber('abc')", calc.isValidNumber('abc'), false);
  check("isValidNumber('12abc')", calc.isValidNumber('12abc'), false);
  check("isValidNumber('Infinity')", calc.isValidNumber('Infinity'), false);
  check("isValidNumber('process.exit()')", calc.isValidNumber('process.exit()'), false);
}

if (has('add')) check('add(2, 3)', calc.add(2, 3), 5);
if (has('subtract')) check('subtract(2, 3)', calc.subtract(2, 3), -1);
if (has('multiply')) check('multiply(4, 5)', calc.multiply(4, 5), 20);
if (has('divide')) {
  check('divide(10, 4)', calc.divide(10, 4), 2.5);
  check('divide(5, 0)', calc.divide(5, 0), null);
}

if (has('calculate')) {
  check("calculate(6, '*', 7)", calc.calculate(6, '*', 7), 42);
  check("calculate(9, '-', 4)", calc.calculate(9, '-', 4), 5);
  check("calculate(5, '/', 0)", calc.calculate(5, '/', 0), null);
  check("calculate(1, '^', 2)", calc.calculate(1, '^', 2), null);
}

console.log('');
console.log(`${fails} failed, ${todos} not written yet.`);

if (has('isValidNumber')) {
  console.log('');
  console.log('BONUS (do these after the guessing game block, not before):');
  check("isValidNumber('0x10')", calc.isValidNumber('0x10'), false);
  check("isValidNumber('1e3')", calc.isValidNumber('1e3'), false);
}
