const fs = require('fs');

console.log('inicio del programa');

async function leerArchivo() {
    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf-8')
        console.log(contenido);
    } catch(err) {
        console.log(err);
    }
}

leerArchivo();

console.log('final del programa');
