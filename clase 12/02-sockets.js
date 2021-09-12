const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const PORT = 3030;

app.use(express.static('./public'));

httpServer.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', PORT);
});

io.on('connection', (socket) => {

    console.log('Nuevo cliente conectado!');

});