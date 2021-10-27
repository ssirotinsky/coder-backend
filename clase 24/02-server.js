const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8080;

app.use(cookieParser());

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));


app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/set-cookie', (req,res)=>{
    let {nombre,valor,duracion} = req.query;
    
    if ((nombre == undefined) || (valor == undefined) || (nombre.trim() == '') || (valor.trim() == '')) {
        res.json({ error: 'set-cookie: falta nombre ó valor' });
    }

    if (duracion == undefined) {
        res.cookie(nombre, valor).json({ proceso: 'ok'});
    } else {
        res.cookie(nombre, valor, {maxAge: duracion}).json({ proceso: 'ok'});
    }
});

app.get('/clear-cookie', (req,res)=>{
    let {nombre} = req.query;
    if ((nombre == undefined) || (nombre.trim() == '')) {
        res.json({ error: 'clear-cookie: falta nombre' });
    }
    res.clearCookie(nombre).json({ proceso: 'ok'});
});

app.get('/get-cookies', (req,res)=>{
    res.send(req.cookies);
});