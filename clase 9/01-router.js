const express = require('express');

const app = express();
const PORT = 8080;
const router = express.Router();

app.use('/', router);

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

router.get('/', (req,res)=>{
    const objRes = {
        msg: 'Bienvenidos a mi Aplicación!',
        error: false
    };
    res.json(objRes);
});