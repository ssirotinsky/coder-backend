const express = require('express');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/prueba', (req, res) => {
    res.send('probando');
});

app.get('/hello', (req, res) => {
    res.render('hello.pug', { mensaje: 'Bienvenidos a mi sitio!!!!' });
});