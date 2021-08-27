import express from 'express';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/', (req,res)=>{
    console.log('request a get recibido!');
    // res.send('Vamos River!');
    res.json({ msg: 'Ahora si funciona!' });
});

app.get('/api/mensajes', (req,res)=>{
    console.log('request a api/mensajes recibido!');
    const objRes = {
        msg: 'Hola Mundo!',
        saludos: 1000,
        error: false
    };
    res.json(objRes);
});