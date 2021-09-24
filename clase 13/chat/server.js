const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080,()=>{
    console.log('escuchando en 8080...');
});

const mensajes = [
    {autor: 'Pablo', texto: 'Me gusta el live coding (?)'},
    {autor: 'Diego', texto: 'Me gusta el cobol...'},
    {autor: 'Sergio', texto: 'Vengan a los after!!'}
]

app.use(express.static('./public'));

io.on('connection',(socket)=>{
    console.log('cliente conectado!!!');
    socket.emit('mensajes', mensajes);
    socket.on('nuevo',(data)=>{
        mensajes.push(data);
        io.sockets.emit('mensajes',mensajes);
    });
});