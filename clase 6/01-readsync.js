const fs = require('fs');

console.log('inicio del programa');

const data = fs.readFileSync('./archivos/prueba.txt', 'utf-8');
console.log(data);

console.log('final del programa');
