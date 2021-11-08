const {spawn} = require('child_process');

const child = spawn('dir', ['/s'], {shell: true});

child.stdout.on('data', data => console.log('data', data.toString()));

child.stderr.on('data', data => console.error('error', data.toString()));

console.log('El spawn es no bloqueante...');


//Diferencias entre spawn y exec:
// Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
// Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
// Usa spawn cuando quieras recibir datos desde que el proceso arranca.
// Usa exec cuando solo quieras recibir datos al final de la ejecución.