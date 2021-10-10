import mongoose from 'mongoose';
const estudiantesCollection = 'estudiantes';

const EstudianteEsquema = mongoose.Schema({
    nombre: {type: String, require: true, minLength: 3, maxLenghth: 20},
    apellido: {type: String, require: true, minLength: 3, maxLenghth: 25},
    edad: {type: Number, require: true, min: 18, max: 99},
    dni: {type: String, require: true, unique: true, minLength: 6, maxLenghth: 8},
    curso: {type: String, require: true},
    nota: {type: Number, require: true, min: 0, max: 10},
    ingreso: {type: Boolean, require: false},
});

export const Estudiante = mongoose.model(estudiantesCollection, EstudianteEsquema);
