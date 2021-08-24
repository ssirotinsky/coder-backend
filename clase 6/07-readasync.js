const fs = require('fs');

console.log('inicio del programa');

const data = fs.readFile('./archivos/prueba.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log('Hubo un error en la lectura del archivo');    
    } else {
        console.log(data);
    }
});

console.log('final del programa');
