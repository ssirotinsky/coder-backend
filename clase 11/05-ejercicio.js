const express = require('express');

const app = express();
const PORT = 8080;
let personas = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));

app.get('/prueba', (req, res) => {
    res.send('probandoss');
});

app.post('/personas', (req, res) => {
    personas.push(req.body);
    res.json({ persona: req.body, err: '' })
});

app.post('/personas/limpiar', (req, res) => {
    personas = [];
    res.json({ err: '' })
});

app.get('/personas', (req, res) => {
    res.render('personas', { personas });
});