import express from 'express';

const app = express();
const PORT = 8080;
const frase = 'Hola mundo como están';

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/api/getFrase', (req,res)=>{
    res.json({frase,
              error:''});
});

app.get('/api/getFrase/:num', (req,res)=>{
    let params = req.params;
    if (params.num > 0 && params.num <= frase.length) {
        res.json({orden: frase[params.num - 1],
            error: ''});
        } else {
            res.json({error: 'Parámetro inválido'});
    }
});

app.get('/api/getPalabra/:num', (req,res)=>{
    let params = req.params;
    let arr = frase.split(' ');
    if (params.num > 0 && params.num <= arr.length) {
        res.json({orden: arr[params.num - 1],
            error: ''});
        } else {
            res.json({error: 'Parámetro inválido'});
    }
});

