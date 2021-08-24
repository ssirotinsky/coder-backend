const fs = require('fs');

console.log('inicio del programa');

fs.unlinkSync('./archivos/prueba.txt');

console.log('final del programa');
