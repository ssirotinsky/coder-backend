const fs = require('fs');

try {
    fs.writeFileSync('./archivos/fyh.txt', new Date().toISOString());
} catch  {
    throw new Error('No se pudo grabar el archivo');
}

try {
    const data = fs.readFileSync('./archivos/fyh.txt', 'utf-8');
    console.log(data);
} catch  {
    throw new Error('No se pudo leer el archivo');    
}

