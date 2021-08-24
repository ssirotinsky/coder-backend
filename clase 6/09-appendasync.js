const fs = require('fs');

console.log('inicio del programa');

fs.appendFile('./archivos/prueba.txt', 'Estoy agregando datos async...', (error) => {
    if (error) {
        console.log('Hubo un error en el append del archivo');    
    } else {
        console.log('Archivo con datos agregados!');
    }
});

console.log('final del programa');
