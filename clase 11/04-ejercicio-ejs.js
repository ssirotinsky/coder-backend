const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));

app.get('/prueba', (req, res) => {
    res.send('probando');
});

app.get('/datos', (req, res) => {
    let { min, nivel, max, titulo } = req.query;
    res.render('barra-medicion', { min, nivel, max, titulo });
});