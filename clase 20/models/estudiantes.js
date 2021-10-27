let mongoose = require('mongoose');
const estudiantesCollection = 'estudiantes';

const EstudianteEsquema = mongoose.Schema({
    nombre: {type: String, required: true, minLength: 3, maxLenghth: 20},
    apellido: {type: String, required: true, minLength: 3, maxLenghth: 25},
    edad: {type: Number, required: false, min: 18, max: 99},
    dni: {type: String, required: true, unique: true, minLength: 6, maxLenghth: 8},
    curso: {type: String, required: true},
    nota: {type: Number, required: true, min: 0, max: 10},
});

module.exports = {
    Estudiante: mongoose.model(estudiantesCollection, EstudianteEsquema)
}