const fs = require('fs');

console.log('inicio del programa');

fs.writeFile('./archivos/prueba.txt', 'Estoy sobreescribiendo async...\n', (error) => {
    if (error) {
        console.log('Hubo un error en la escritura del archivo');    
    } else {
        console.log('Archivo grabado!');
    }
});

console.log('final del programa');
