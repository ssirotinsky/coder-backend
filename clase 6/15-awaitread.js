const fs = require('fs');

console.log('inicio del programa');

async function leerArchivo() {
    console.log('a ver');
    try {
        const contenido =  fs.promises.readFile('./info.txt', 'utf-8')
        console.log(contenido);
    } catch(err) {
        console.log(err);
    }
}

leerArchivo();

console.log('final del programa');
