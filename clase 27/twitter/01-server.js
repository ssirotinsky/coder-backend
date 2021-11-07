require('dotenv').config({path: './config/.env'});
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy; 
const routes = require('./routes'); 

const app = express();
const PORT = process.env.PORT || 3000;
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

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_SECRET,
    callbackURL: `http://localhost:${PORT}/auth/twitter/datos`
  },
  function(accessToken, refreshToken, profile, cb) {
    let indice = usuarios.findIndex(e=>e.twitterId == profile.id);
    if (indice != -1) {
        return cb(null, usuarios[indice]);
    } else {
        console.log('profile:');
        console.log(profile);
        let nuevoUsuario = {
            twitterId: profile.id, 
            name: profile.displayName, 
            visitas: 0
        }
        usuarios.push(nuevoUsuario);
        console.log(usuarios);
        return cb(null, nuevoUsuario)
    }
  }
));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

passport.serializeUser((user, done)=>{
    done(null, user.twitterId);
});

passport.deserializeUser((id, done)=>{
    let usuario = usuarios[usuarios.findIndex(e=>e.twitterId == id)];
    done(null, usuario);
});

app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/datos',
    passport.authenticate('twitter', { failureRedirect: '/error-login.html' }),
    function(req, res) {
        req.user.visitas++;
        res.redirect('/datos');
    }
);

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
