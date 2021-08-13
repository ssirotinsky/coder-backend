//para probar expresiones regulares: regex101.com
console.log(/hola.es/.test('hola estoy probando'));
console.log(/hola.es/.test('holapestoy probando'));
console.log(/hola.es/.test('hola0estoy probando'));
console.log(/hola.es/.test('hola\nestoy probando'));

console.log(/hola.es/s.test('hola\nestoy probando'));