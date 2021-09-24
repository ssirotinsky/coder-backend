const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('./public'));

http.listen(8080,
    () => console.log('Servidor corriendo en puerto 8080...'));

let partidos = [
    {local: {equipo: "River", goles: 0}, visitante: {equipo: "Velez", goles: 0}},
    {local: {equipo: "Patronato", goles: 0}, visitante: {equipo: "Boca", goles: 0}},
    {local: {equipo: "Independiente", goles: 0}, visitante: {equipo: "Colón", goles: 0}},
    {local: {equipo: "Newells", goles: 0}, visitante: {equipo: "San Lorenzo", goles: 0}},
    {local: {equipo: "Godoy Cruz", goles: 0}, visitante: {equipo: "Arsenal", goles: 0}},
    {local: {equipo: "Racing", goles: 0}, visitante: {equipo: "Talleres", goles: 0}}
];

io.on('connection', (socket) => {
    
    console.log('Cliente conectado!');

    socket.emit('partidos', partidos);

    socket.on('suma-gol', (data) => {
        if (data.tipo == 'local') {
            partidos[data.id].local.goles++;
            io.sockets.emit('gol', {equipo: partidos[data.id].local.equipo});
        } else {
            partidos[data.id].visitante.goles++;
            io.sockets.emit('gol', {equipo: partidos[data.id].visitante.equipo});
        }
        io.sockets.emit('partidos', partidos);
    });

    socket.on('resta-gol', (data) => {
        if (data.tipo == 'local') {
            if (partidos[data.id].local.goles > 0) {
                partidos[data.id].local.goles--;
            }
        } else {
            if (partidos[data.id].visitante.goles > 0) {
                partidos[data.id].visitante.goles--;
            }
        }
        io.sockets.emit('partidos', partidos);
    });

});

app.get('/goles', (req,res)=>{
    res.sendFile('goles.html', { root: path.join(__dirname, './public') });
})