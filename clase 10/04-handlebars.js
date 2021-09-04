const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 8080;

app.use(express.static('public'));

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error => console.log('Error en servidor', error));

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
);

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'hbs'); // registra el motor de plantillas


let fakeAPI = () => [
    { name: 'Katarina', lane: 'midlaner' },
    { name: 'Jayce', lane: 'toplaner' },
    { name: 'Heimerdinger', lane: 'toplaner' },
    { name: 'Jayce', lane: 'midlaner' },
    { name: 'Azir', lane: 'midlaner' }
]

app.get('/', function(req, res) {
    res.render('main', { suggestedChamps: fakeAPI(), listExists: true });
});