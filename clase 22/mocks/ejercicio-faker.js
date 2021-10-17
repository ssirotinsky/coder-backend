const express = require('express');
const generador = require('./generador/usuarios');

const app = express();
app.use(express.json());

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/test', (req,res)=>{
    let usuarios = [];
    let cant = req.query.cant || 10;
    for (let i=0; i<cant; i++) {
        let usuario = generador.get();
        usuario.id = i + 1;
        usuarios.push(usuario);
    }
    res.send(usuarios);
});

