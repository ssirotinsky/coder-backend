const express = require('express');
const moment = require('moment');

const app = express();
const PORT = parseInt(process.argv[2]) || 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el port', server.address().port, '. Process ID: ', process.pid);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/datos', (req,res)=>{
    console.log(`Port: ${PORT} -> Fyh: ${moment().format('DD/MM/YYYY HH:mm')}`);
    res.send(`Servidor express <span style="color: blueviolet;">(Nginx)</span> en ${PORT} - PID ${process.pid} - ${moment().format('DD/MM/YYYY HH:mm')}`);
});

//tasklist /FI "IMAGENAME eq ng*"
//taskkill /PID #pid /F 