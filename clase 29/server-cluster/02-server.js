const express = require('express');
const moment = require('moment');

const app = express();
const PORT = process.argv[2] || 8080;

console.log(PORT);


const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port, '. Process ID: ', process.pid);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/', (req,res)=>{
    res.send(`Servidor express en ${PORT} - PID ${process.pid} - ${moment().format('DD/MM/YYYY HH:mm')}`);
});

