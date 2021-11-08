const {fork} = require('child_process');

const forked = fork('./child.js');

forked.on('message', (mensaje)=>console.log('Mensaje del hijo:', mensaje));

console.log('Inicio del programa Padre');

setTimeout(()=>forked.send({mensaje: 'hola'}), 2000);