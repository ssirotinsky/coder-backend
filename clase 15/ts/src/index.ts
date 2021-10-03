
import express from 'express';
import { Persona } from './lib/classes';

const operaciones = require('./lib/functions.js');

const person:Persona = new Persona ('coder', 'house');
 
const app = express();

app.get('/',(req,res)=>{
    res.send({timeES6: operaciones.getTime(), fullNameTS: person.getFullName()});
});

const PORT:number = 8080;
app.listen(PORT, () => {
    console.log(`Servidor expressss TypeScript/WebPack escuchando en el puerto ${PORT}`)
});
