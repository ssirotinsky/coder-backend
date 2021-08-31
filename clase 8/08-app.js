import express from 'express';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/sumar', (req,res)=>{
    let query = req.query;
    res.json({resultado: parseInt(query.num1)+parseInt(query.num2)});
});

app.get('/api/sumar/:n1/:n2', (req,res)=>{
    let params = req.params;
    res.json({resultado: parseInt(params.n1)+parseInt(params.n2)});
});

app.get('/api/operacion/:expresion', (req,res)=>{
    let params = req.params;
    res.json({resultado: eval(params.expresion)});
});

app.post('/api', (req,res)=>{
    res.json({resultado: 'okpost'});
});

app.put('/api', (req,res)=>{
    res.json({resultado: 'okput'});
});

app.delete('/api', (req,res)=>{
    res.json({resultado: 'okdelete'});
});

