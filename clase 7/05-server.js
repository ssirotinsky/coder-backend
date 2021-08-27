const express = require('express');
const moment = require('moment');

const app = express();
const PORT = 8080;
let visitas = 0;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/', (req,res)=>{
    res.send('<h1 style="color:blue"> Bienvenidos al Servidor Express </h1>');
});

app.get('/visitas', (req,res)=>{
    res.send(`La cantidad de visitas es ${++visitas}`);
});

app.get('/fyh', (req,res)=>{
    let fyh = moment().format("DD/M/YYYY hh:mm:ss");
    res.json({fyh});
});