const express = require('express');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const app = express();
const PORT = 8080;

const redisClient = redis.createClient({
    host: 'redis-13928.c258.us-east-1-4.ec2.cloud.redislabs.com',
    port: 13928,
    auth_pass: 'zp2NQTYt9wSNeuwRGPQCySMe6Vl6HiQC'
  });

  app.use(session({
    store: new RedisStore({
        client: redisClient, 
        ttl: 2
    }),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 5000 }
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

