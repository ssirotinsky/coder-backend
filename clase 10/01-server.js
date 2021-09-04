const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.static('public'));

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));