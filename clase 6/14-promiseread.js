const fs = require('fs');

console.log('inicio del programa');

fs.promises.readFile('./info.txt', 'utf-8')
.then(contenido=> console.log(contenido))
.catch(error=>console.log(error));

console.log('final del programa');
