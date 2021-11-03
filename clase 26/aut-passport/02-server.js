const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const routes = require('./routes'); 
const {obtenerUsuario, passwordValida} = require('./utils/util');

const app = express();
const PORT = 8080;
const usuarios = [];

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

passport.use('signup', new LocalStrategy({
    passReqToCallback: true
},
    function(req, username, password, done) {
        let usuario = obtenerUsuario(usuarios, username);
        if (usuario != undefined){
            return done(null, false, console.log(usuario.username, 'Usuario ya existe'));
        } else {
            let nuevoUsuario = {
                _id: usuarios.length + 1, 
                username, 
                password
            }
            usuarios.push(nuevoUsuario);
            console.log(usuarios);
            return done(null, nuevoUsuario)
        }
    }
));

passport.use('login', new LocalStrategy({
        passReqToCallback: true
    }, 
    function (req, username, password, done) {
        let usuario = obtenerUsuario(usuarios, username);
        if (usuario == undefined) {
            return done(null, false, console.log(username, 'usuario no existe'));
        } else {
            if (passwordValida(usuario, password)) {
                return done(null, usuario)
            } else {
                return done(null, false, console.log(username, 'password errónea'));
            }
        }
    })
);

passport.serializeUser((user, done)=>{
    done(null, user._id);
});

passport.deserializeUser((id, done)=>{
    let usuario = obtenerUsuario(usuarios, username);
    done(null, usuario);
});

app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/', routes.getRoute);
app.get('/login', routes.getLogin);
app.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}), routes.postLogin);
app.post('/faillogin', routes.postFailLogin);

app.get('/signup', routes.getSignUp);
app.post('/signup', passport.authenticate('signup', {failureRedirect: '/failsignup'}), routes.postSignUp);
app.post('/failsignup', routes.postFailSignUp);

app.get('*', routes.failRoute);

