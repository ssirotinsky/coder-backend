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

app.get('/', (req, res) => {
    let mascots = [
        { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },
        { name: 'Tux', organization: 'Linux', birth_year: 1996 },
        { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 }
    ];
    let tagline = 'No programming concept is complete without a cute animal mascot';
    res.render('pages/index', { mascots, tagline });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { about: 'Prueba EJS' });
});