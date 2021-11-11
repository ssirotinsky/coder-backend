const express = require('express');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

//Para convertir en HTTPS
const https = require('https');
const fs = require('fs'); 
const httpsOptions = {
    key: fs.readFileSync('./sslcert/cert.key'),
    cert: fs.readFileSync('./sslcert/cert.pem')
}

const app = express();
const PORT = 8443;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));

const usuarios = [];

app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: '1120322758792852',
    clientSecret: '952b27209ef587338642dbea8f44e091',
    callbackURL: `https://localhost:${PORT}/auth/facebook/datos`
  },
  function(accessToken, refreshToken, profile, cb) {
      let indice = usuarios.findIndex(e=>e.id == profile.id);
      if (indice == -1) {
          let usuario = {
              id: profile.id
          };
          console.log('nuevo', usuario);
          usuarios.push(usuario);
          return cb(null, usuario);
      } else {
          console.log('encontré', usuarios[indice]);
          return cb(null, usuarios[indice])
      }
  }
));


const server = https.createServer(httpsOptions, app)
    .listen(PORT, () => {
        console.log('Server corriendo en ' + PORT)
    })
server.on('error', error=>console.log('Error en servidor', error));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    let usuario = usuarios[usuarios.findIndex(e=>e.id == id)];
    done(null, usuario);
}); 


app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/datos',
  passport.authenticate('facebook', { failureRedirect: '/error-login.html' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/datos');
  });

  app.get('/datos', (req,res) => {
    if (req.isAuthenticated()) {
        let user = req.user;
        res.json({user});
    } else {
        res.redirect('/index.html');
    }
});
