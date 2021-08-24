const fs = require('fs');

console.log('inicio del programa');

fs.unlink('./archivos/prueba.txt', (error) => {
    if (error) {
        console.log('Hubo un error en el borrado del archivo');    
    } else {
        console.log('Archivo borrado!');
    }
});

console.log('final del programa');
