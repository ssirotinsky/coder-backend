import express from 'express';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let frase = 'Frase inicial';

app.get('/api/leer', (req,res)=>{
    res.json({frase});
});

app.get('/api/leer/:pos', (req,res)=>{
    let params = req.params;
    let pos = params.pos;
    let arr = frase.split(' ');
    if (pos>0 && pos<=arr.length) {
        res.json({palabra: arr[pos-1],
                  error: ''});
    } else {
        res.json({error: 'error en posición'})
    }
});

app.post('/api/guardar', (req,res)=>{
    let body = req.body;
    let palabra = body.palabra;
    frase+= ' ' + palabra;
    res.json({palabra});
});

app.delete('/api/borrar/:pos', (req,res)=>{
    let params = req.params;
    let pos = params.pos;
    let arr = frase.split(' ');
    if (pos>0 && pos<=arr.length) {
        let borrar = arr[pos-1];
        arr.splice(pos-1,1);
        frase = arr.join(' ');
        res.json({palabra: borrar,
                  error: ''});
    } else {
        res.json({error: 'error en posición'})
    }});

    app.put('/api/actualizar/:pos', (req,res)=>{
        let params = req.params;
        let body = req.body;    
        let pos = params.pos;
        let palabra = body.palabra;
        let arr = frase.split(' ');
        if (pos>0 && pos<=arr.length) {
            let reemplazar = arr[pos-1];
            arr[pos-1] = palabra;
            frase = arr.join(' ');
            res.json({palabra: reemplazar,
                      error: ''});
        } else {
            res.json({error: 'error en posición'})
        }});
    