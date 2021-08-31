import express from 'express';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

//Incorporamos get a api/mensajes 
app.get('/api/mensajes', (req,res)=>{
    console.log('get request a api/mensajes recibido');
    const objRes = {
        msg: 'Hola Mundo!',
        saludos: 1000,
        error: false
    };
    res.json(objRes);
});