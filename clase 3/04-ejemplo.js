const operacion = (num1, num2, tipoOperacion) => tipoOperacion(num1, num2);

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const modulo = (num1, num2) => num1 % num2;

console.log(operacion(3,5,suma));
console.log(operacion(9,5,resta));
console.log(operacion(2,9,multiplicacion));
console.log(operacion(18,3,division));
console.log(operacion(20,3,modulo));