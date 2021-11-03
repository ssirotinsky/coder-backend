const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

const usuarios = [];

app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.post('/register', (req,res)=>{
    let {usuario, password, direccion} = req.body;
    if (usuarios.find(e=>e.usuario == usuario)) {
        res.redirect('/ya-registrado.html');
    } else {
        usuarios.push({
            usuario, 
            password, 
            direccion
        });
        res.redirect('/index.html');
    }
});

app.get('/datos', (req,res)=>{
    if (req.session.usuario) {
        if (req.session.visitas) {
            req.session.visitas++;
        } else {
            req.session.visitas = 1;
        }
        res.json({
            usuario: req.session.usuario,
            direccion: req.session.direccion,
            visitas: req.session.visitas
        });
    } else {
        res.redirect('index.html');
    }
});

app.post('/login', (req,res)=>{
    let {usuario, password} = req.body;
    let indice = usuarios.findIndex(e=>e.usuario == usuario);
    if (indice != -1) {
        if (usuarios[indice].password == password) {
            req.session.usuario = usuario;
            req.session.direccion = usuarios[indice].direccion;
            req.session.visitas = 0;
            res.redirect('/datos');
        } else {
            res.redirect('/error-password.html');
        }
    } else {
        res.redirect('/no-existe.html');
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

app.get('/usuarios', (req,res)=>{
    res.json({usuarios});
});

