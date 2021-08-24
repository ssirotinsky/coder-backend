const fs = require('fs');

console.log('inicio del programa');

fs.readdir('./archivos', (error, files) => {
    if (error) {
        console.log('Hubo un error en la lectura de la carpeta');    
    } else {
        console.log('Archivos en la carpeta:', files);
    }
});

console.log('final del programa');
