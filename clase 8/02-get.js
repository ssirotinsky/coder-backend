import express from 'express';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

//Incorporamos query parameters al get 
app.get('/api/mensajes', (req,res)=>{
    console.log('get request con query parameters a api/mensajes recibido');
    let query = req.query;
    let cantidad = Object.entries(query).length; 
    console.log(Object.entries(query));
    console.log(query);
    if (cantidad > 0) {
        const objRes = {
            msg: 'Hola Mundo con query parameters!',
            parametros: cantidad,
            query,
            error: false
        };
        res.json(objRes);
    } else {
        const objRes = {
            msg: 'Hola Mundo sin query parameters!',
            parametros: 0,
            error: false
        };
        res.json(objRes);
    }
});
