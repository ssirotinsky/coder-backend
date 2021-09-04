const express = require('express');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));

const fs = require('fs');
// defino el motor de plantilla
app.engine('ntl', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if (err) {
            return callback(new Error(err));
        }
        const rendered = content.toString()
            .replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    });
});
app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'ntl'); // registra el motor de plantillas

app.get('/', function(req, res) {
    res.render('index', { title: 'Hola', message: 'Bienvenidos a tod@s!!' });
});