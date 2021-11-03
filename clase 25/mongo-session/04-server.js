const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const app = express();
const PORT = 8080;

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://sergiosiro:ko7YMDi8zZ2PfNrL@cluster0.8vpxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
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

