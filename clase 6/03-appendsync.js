const fs = require('fs');

console.log('inicio del programa');

fs.appendFileSync('./archivos/prueba.txt', 'estoy agregando info...\n');

console.log('final del programa');
