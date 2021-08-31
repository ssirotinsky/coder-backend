import express from 'express';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/api/mensajes', (req,res)=>{
    console.log('get request con query parameters a api/mensajes recibido');
    let query = req.query;
    let cantidad = Object.entries(req.query).length; 
    console.log(query);
    if (cantidad > 0) {
        const objRes = {
            msg: 'Hola Mundo con query parameters!',
            parametros: cantidad,
            query: query,
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

//Incorporamos get con identificador 
app.get('/api/mensajes/:id', (req,res)=>{
    console.log('get request con identificador a api/mensajes recibido');
    console.log(req.params);
    let params = req.params;
    const objRes = {
        msg: 'Hola Mundo con identificador!',
        id: params.id,
        error: false
    };
    res.json(objRes);
});
