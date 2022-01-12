let num1 = 3;
let num2 = 2;

var sumar = (num1, num2) => num1 + num2;
var restar = (num1, num2) => num1 - num2;
var multip = (num1, num2) => num1 * num2;
var dividir = (num1, num2) => num1 / num2;

console.log(`${num1} + ${num2} da como resultado:`, sumar(num1,num2));
console.log(`${num1} - ${num2} da como resultado:`, restar(num1,num2));
console.log(`${num1} * ${num2} da como resultado:`, multip(num1,num2));
console.log(`${num1} / ${num2} da como resultado:`, dividir(num1,num2));


multip(num1,num2);
dividir(num1,num2);
