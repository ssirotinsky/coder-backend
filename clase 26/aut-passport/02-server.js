const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const routes = require('./routes'); 
const {obtenerUsuario, obtenerUsuarioId, passwordValida} = require('./utils/util');

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
                password,
                direccion: req.body.direccion,
                visitas: 1
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
    let usuario = obtenerUsuarioId(usuarios, id);
    done(null, usuario);
});

app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/login', routes.getLogin);
app.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}), routes.postLogin);
app.get('/faillogin', routes.getFailLogin);

app.get('/signup', routes.getSignUp);
app.post('/signup', passport.authenticate('signup', {failureRedirect: '/failsignup'}), routes.postSignUp);
app.get('/failsignup', routes.getFailSignUp);

app.get('/logout', routes.getLogout);

app.get('/ruta-protegida', checkAuthentication, routes.getRutaProtegida);

app.get('/datos', routes.getDatos);

app.get('*', routes.failRoute);

function checkAuthentication(req, res, next){
    if (req.isAuthenticated()){
        next();
    } else {
        res.redirect('/');
    }
}
