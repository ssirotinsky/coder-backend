require('dotenv').config({path: './config/.env'});
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy; 
const routes = require('./routes'); 

//Para convertir en HTTPS
const https = require('https');
const fs = require('fs'); 
const path = require('path'); 
const httpsOptions = {
    key: fs.readFileSync('./sslcert/cert.key'),
    cert: fs.readFileSync('./sslcert/cert.pem')
}

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

console.log(`https://localhost:${PORT}/auth/facebook/datos`);

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `https://localhost:${PORT}/auth/facebook/datos`,
    profileFields: ['id', 'displayName']
  },
  function(accessToken, refreshToken, profile, cb) {
    let indice = usuarios.findIndex(e=>e.facebookId == profile.id);
    if (indice != -1) {
        return cb(null, usuarios[indice]);
    } else {
        let nuevoUsuario = {
            facebookId: profile.id, 
            name: profile.displayName, 
            visitas: 0
        }
        usuarios.push(nuevoUsuario);
        console.log(usuarios);
        return cb(null, nuevoUsuario)
    }
  }
));

const server = https.createServer(httpsOptions, app)
    .listen(PORT, () => {
        console.log('Server corriendo en ' + PORT)
    })
server.on('error', error=>console.log('Error en servidor', error));

passport.serializeUser((user, done)=>{
    done(null, user.facebookId);
});

passport.deserializeUser((id, done)=>{
    let usuario = usuarios[usuarios.findIndex(e=>e.facebookId == id)];
    done(null, usuario);
});

app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/datos',
    passport.authenticate('facebook', { failureRedirect: '/error-login.html' }),
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
