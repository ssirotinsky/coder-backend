process.on('uncaughtException',(err)=>console.log('Error!!!', err));

setTimeout(()=>console.log('Fin!'), 1000);

rutinaInexistente();

console.log('No se ejecutará nunca...');
