import mongoose from 'mongoose';
import {Estudiante}  from './models/estudiantes2.js';

CRUD();

async function CRUD (){
    try {
        
        const URI = 'mongodb://localhost:27017/colegio';
        await mongoose.connect(URI, 
            { 
              useNewUrlParser: true,
              useUnifiedTopology: true,
              serverSelectionTimeoutMS: 1000
            })    
        console.log('Conectado a la base de datos...');

        await Estudiante.updateOne({nombre: 'Lucas', apellido: 'Blanco'},  {dni: '333'});
        console.log('DNI actualizado...');

        await Estudiante.updateMany({}, {$set: {ingreso: false}});
        console.log('Campo ingreso inicializado...');

        await Estudiante.updateMany({curso: '1A'}, {$set: {ingreso: true}});
        console.log('Campo ingreso actualizado...');

        let estudiantes = await Estudiante.find({nota: {$gte: 4}}, {_id: 0, __v: 0});
        console.log('Estudiantes que aprobaron:', estudiantes);

        estudiantes = await Estudiante.find({ingreso: true}, {_id: 0, __v: 0});
        console.log('Estudiantes que tienen ingreso en true:', estudiantes);

        await Estudiante.deleteMany({ingreso: true});
        console.log('Estudiantes con ingreso en true borrados');

        estudiantes = await Estudiante.find({},{__v: 0});
        console.log('Lista final de estudiantes:');
        for (let estudiante of estudiantes){
            let fechaCreacion = new Date(parseInt(estudiante['_id'].toString().substring(0, 8), 16) * 1000);
            console.log(`${estudiante} -> Fecha de creación: ${fechaCreacion}`);
        }

        await mongoose.connection.close();
    }
    catch(error) {
        throw `Error: ${error}`;
    }
}

