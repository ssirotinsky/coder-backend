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

app.get('/con-session', (req,res)=>{
    if (req.session.contador) {
        req.session.contador++;
        res.send(`Ud. ha visitado el sitio ${req.session.contador} veces`);
    } else {
        req.session.contador = 1;
        res.send('Bienvenido!');
    }
});

app.get('/logout', (req,res)=>{
    req.session.destroy(err=>{
        if (err){
            res.json({status: 'Logout error', body: err});
        } else {
            res.send('Logout ok!');
        }
    });
});

app.get('/login', (req,res)=>{
    if (!req.query.username || !req.query.password) {
        res.send('Login failed!');
    } else if (req.query.username == "amy" && req.query.password == "amypassword"){
        req.session.user = "amy";
        req.session.admin = true;
        res.send('Login ok!');
    } else {
        res.send('User or password error!');
    }
});

app.get('/logout', (req,res)=>{
    req.session.destroy();
    res.send('logout success!');
});

app.get('/content', auth, (req,res)=>{
    res.send('Puedes ver este contenido si estás logueado y sos un administrador');
});

function auth (req, res, next)  {
    // if (req.session && req.session.admin) {
    if (req.session?.admin) {
        return next();
    } else {
        return res.sendStatus(401);
    }
}