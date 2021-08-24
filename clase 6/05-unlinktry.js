const fs = require('fs');

console.log('inicio del programa');
try {
    fs.unlinkSync('./archivos/prueba.txt');
    console.log('Se ha borrado el archivo');
} catch {
    console.log('No se pudo borrar el archivo...');
}

console.log('final del programa');
