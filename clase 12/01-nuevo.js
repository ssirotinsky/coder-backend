const express = require('express');
const { SocketAddress } = require('net');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('./public'));

http.listen(3030,
    () => console.log('escuchando...'));

let mensajes = [];

io.on('connection', (socket) => {
    console.log('alguien se está conectado...');
    io.sockets.emit('atodos', mensajes);
    socket.emit('mensajex', 'hola!! este es un mensaje desde el servidor!');
    socket.on('notificacion', (data) => {
        mensajes.push({ socketId: socket.id, mensaje: data });
        io.sockets.emit('atodos', mensajes);
    })
    socket.on('mitexto', (data) => {
        io.sockets.emit('devuelvo', data);
    })
});