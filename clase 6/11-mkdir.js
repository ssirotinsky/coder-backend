const fs = require('fs');

console.log('inicio del programa');

fs.mkdir('./mas-archivos', (error) => {
    if (error) {
        console.log('Hubo un error en la creación de la carpeta');    
    } else {
        console.log('Carpeta creada!');
    }
});

console.log('final del programa');
