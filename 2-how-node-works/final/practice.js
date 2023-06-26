const Calculator = require('./test-module-1');
const { add, multiply, divide } = require('./test-module-2');
const customLogger = require('./test-module-3');


const calculatorInstance = new Calculator();
const result = calculatorInstance.add(5, 3);
console.log(result); // Output: 8



const result1 = add(5, 3);
const result2 = multiply(5, 3);
const result3 = divide(10, 2);

console.log(result1); // Output: 8
console.log(result2); // Output: 15
console.log(result3); // Output: 5



customLogger();
