const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8080;

app.use(cookieParser());
// app.use(cookieParser('123456'));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));


app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/set', (req,res)=>{
    res.cookie('server', 'express').send('Cookie set');
    // res.cookie('server', 'express',  { signed: true } ).send('Cookie set');
});

app.get('/setEX', (req,res)=>{
    res.cookie('server2', 'express2',{maxAge: 30000}).send('Cookie setEX');
});

app.get('/get', (req,res)=>{
    console.log('Unsigned.:', req.cookies);
    console.log('Signed:', req.signedCookies);
    res.send({});
});

app.get('/clr', (req,res)=>{
    res.clearCookie('server').send('Cookie clear');
});