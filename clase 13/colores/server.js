const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const paint = require('./paint');

app.use(express.static('./public'));

const PORT = process.env.app_port || process.env.PORT || 8080;

http.listen(PORT,
    () => console.log('Servidor corriendo en puerto', PORT));

app.get('/reset',(req,res)=>{
    paint.iniMap();
    io.sockets.emit('rectlistdata', paint.mapToArray(paint.rectangleMap));
    res.redirect('/');
});

io.on('connection', (socket) => {
    console.log('Cliente conectado!');
    let thisClientIP = socket.handshake.address;
    socket.emit('address', thisClientIP);
    
    socket.on('info', (data)=>{
        console.log(data);
        socket.broadcast.emit('info', data);
    });

    socket.on('refresh', (data)=>{
        if (data=='rectlist'){
            socket.emit('rectlistdata', paint.mapToArray(paint.rectangleMap));
        }
    });

    let Size = 4;
    socket.on('rect', (data)=>{
        let c = {r: data.r, g: data.g, b: data.b};
        data.x = (Math.trunc(data.x / Size) * Size);
        data.y = (Math.trunc(data.y / Size) * Size);
        let shape = paint.Shape(data.x, data.y, Size, Size, c.r, c.g, c.b);
        paint.rectangleMap[data.x][data.y] = shape;
        socket.emit('rect', shape);
        socket.broadcast.emit('rect', shape);
    }); 

});