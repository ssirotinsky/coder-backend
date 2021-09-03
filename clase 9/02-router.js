const express = require('express');

const app = express();
const PORT = 8080;
const router = express.Router();

app.use('/api', router);

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

router.get('/', (req,res)=>{
    const objRes = {
        msg: 'Bienvenidos a mi sitio Principal de la ruta!',
        error: false
    };
    res.json(objRes);
});

router.get('/mensajes', (req,res)=>{
    const objRes = {
        msg: 'Bienvenidos a mi sitio de mensajes!',
        error: false
    };
    res.json(objRes);
});

router.get('/saludos', (req,res)=>{
    const objRes = {
        msg: 'Bienvenidos a mi sitio de saludos!',
        error: false
    };
    res.json(objRes);
});