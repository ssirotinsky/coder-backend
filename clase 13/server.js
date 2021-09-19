const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('./public'));

http.listen(8080,
    () => console.log('Servidor corriendo en puerto 8080...'));

let mensajes = [
    {autor: "Mariano", texto: "Hola a tod@s!"},
    {autor: "Romina", texto: "Buenísimo!!!"},
    {autor: "Dario", texto: "Hay alguien ahi?"}
];

io.on('connection', (socket) => {
    console.log('Cliente conectado!');
    socket.emit('mensajes', mensajes);
    socket.on('nuevo-mensaje', (data)=>{
        mensajes.push(data);
        io.sockets.emit('mensajes', mensajes);
    });
});