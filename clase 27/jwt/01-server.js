require('dotenv').config({path: './config/.env'});
const express = require('express');
const {encryptPassword, generateToken, verifyToken, validPassword} = require('./utils/utils');

const app = express();
const PORT = process.env.PORT || 3000;
const tokenSecretJWT = process.env.SECRET_JWT;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

const usuarios = [];

app.get('/test', (req,res)=>{
    res.send('Server levantado...');
});

app.post('/register', (req,res)=>{
    let {username, password, direccion} = req.body;
    if (usuarios.find(e=>e.username == username)) {
        res.status(409).json({error: 'Usuario ya existe'});
    } else {
        let user = {
            username, 
            password: encryptPassword(password), 
            direccion,
            visitas: 1
        };
        usuarios.push(user);
        console.log(user);
        res.status(201).json({token: generateToken(user), error: ''});
    }
});

app.get('/datos', verifyToken, (req,res)=>{
    let {username, direccion, visitas} = req.user;
    res.status(200).json({
        error: '',
        username,
        direccion,
        visitas
    });
});

app.post('/login', (req,res)=>{
    let {username, password} = req.body;
    let indice = usuarios.findIndex(e=>e.username == username);
    if (indice != -1) {
        if (validPassword(usuarios[indice].password, password)) {
            let user = usuarios[indice]; 
            user.visitas++;
            res.status(200).json({token: generateToken(user), error: ''});;
        } else {
            res.status(401).json({error: 'Password inválida'});
        }
    } else {
        res.status(401).json({error: 'Usuario no existe'});
    } 
});
