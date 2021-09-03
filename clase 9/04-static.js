const express = require('express');

const app = express();
const PORT = 8080;
const routerMascotas = express.Router();
const routerPersonas = express.Router();

const personas = [];
const mascotas = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

app.use(express.static('public'));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

routerPersonas.get('/listar', (req,res)=>{
    res.json({personas, error:false});
});

routerPersonas.post('/guardar', (req,res)=>{
    personas.push(req.body);
    res.json({operacion:'persona grabada', error:''})
});

routerMascotas.get('/listar', (req,res)=>{
    res.json({mascotas, error:false});
});

routerMascotas.post('/guardar', (req,res)=>{
    mascotas.push(req.body);
    res.json({operacion:'mascota grabada', error:''})
});

