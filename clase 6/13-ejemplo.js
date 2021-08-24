const fs = require('fs');

console.log('inicio del programa');

const data = fs.readFile('./package.json', 'utf-8', (error, data) => {
    if (error) {
        throw new Error(`Hubo un error en la lectura del archivo: ${error}`);    
    } else {
        let info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: data.length
        }
        console.log(info);
        fs.writeFile('./info.txt', JSON.stringify(info, null, '\t'), (error) => {
            if (error) {
                throw new Error(`Hubo un error en la escritura del archivo: ${error}`);    
            } else {
                console.log('Archivo grabado!');
            }
        });
    }
});

console.log('final del programa');
