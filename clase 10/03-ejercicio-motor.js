const express = require('express');
const moment = require('moment');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));

const fs = require('fs');
// defino el motor de plantilla
app.engine('cte', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if (err) {
            return callback(new Error(err));
        }
        const rendered = content.toString()
            .replace('^^titulo$$', '' + options.titulo + '')
            .replace('^^mensaje$$', '' + options.mensaje + '')
            .replace('^^autor$$', '' + options.autor + '')
            .replace('^^version$$', '' + options.version + '')
            .replace('#!nombre#!', '' + options.nombre + '')
            .replace('#!apellido#!', '' + options.apellido + '')
            .replace('#!fechahora#!', '' + options.fechahora + '')
        return callback(null, rendered);
    });
});
app.set('views', './cte1'); // especifica el directorio de vistas
app.set('view engine', 'cte'); // registra el motor de plantillas

app.get('/', function(req, res) {
    let datos = {
        titulo: 'Bienvenidos a mi sitio',
        mensaje: 'Los saludo desde el motor de plantillas',
        autor: 'Sergio Sirotinsky',
        version: '0.0.1'
    }
    res.render('plantilla1', datos);
});

app.get('/nuevo', function(req, res) {
    let datos = {
        nombre: 'Sergio',
        apellido: 'Sirotinsky',
        fechahora: moment().format('DD/MM/YYYY HH:mm:ss')
    }
    res.render('plantilla2', datos);
});