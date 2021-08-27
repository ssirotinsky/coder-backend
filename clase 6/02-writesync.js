const fs = require('fs');

console.log('inicio del programa');

fs.writeFileSync('./archivos/prueba.txt', 'estoy sobreescribiendo el archivo...\n');

console.log('final del programa');


