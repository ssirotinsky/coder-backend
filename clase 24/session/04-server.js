const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 8080;

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));


app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/root', (req,res)=>{
    if (req.session.contador) {
        req.session.contador++;
        if (!req.session.usuario) {
            res.send(`Ud. ha visitado el sitio ${req.session.contador} veces`);
        } else {
            res.send(`${req.session.usuario} visitaste la página ${req.session.contador} veces`);
        }
    } else {
        req.session.contador = 1;
        if (!req.query.usuario) {
            res.send('Te damos la bienvenida!');
        } else {
            req.session.usuario = req.query.usuario;
            res.send(`Bienvenido ${req.session.usuario}!`);
        }
    }
});

app.get('/olvidar', (req,res)=>{
    const usuario = req.session.usuario;
    req.session.destroy(err=>{
        if (err){
            res.json({error: err});
        } else {
            if (usuario){
                res.send(`Hasta luego ${usuario}!`);
            } else {
                res.send(`Hasta luego!`);
            }
        }
    });
});

