const express = require('express');

const app = express();
const PORT = 8080;
const router = express.Router();

app.use('/api', router);

app.use((req,res,next)=>{ 
    let hoy = new Date();
    console.log(`Hora Actual --> ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`);
    next();
});

router.use((req,res,next)=>{ 
    let hoy = new Date();
    console.log(`Hora Router --> ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`);
    req.msgderuta="Mensaje desde el router222";
    next();
});

function middleProbando (req,res,next){
    let hoy = new Date();
    console.log(`Hora Probando --> ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`);
    req.mensaje = "Bienvenidos a tierra!";
    next();
}

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/',(req,res,next)=>{
    const objRes = {
        msg: 'Bienvenidos a mi Aplicación!',
        error: false
    };
    res.json(objRes);
});

app.get('/probando', middleProbando,(req,res)=>{
    const objRes = {
        msg: req.mensaje,
        error: false
    };
    res.json(objRes);
});

router.get('/probar',(req,res)=>{
    const objRes = {
        msg: req.msgderuta,
        error: false
    };
    res.json(objRes);});