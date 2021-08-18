// const hagoAlgo = (miFuncion) => {
//     console.log('Hago algo...');
//     miFuncion();
// }

// const soloSaludo = () => console.log('Sólo saludo');
// hagoAlgo(soloSaludo);
// hagoAlgo(() => console.log('Sólo saludo'));


const hagoAlgo = (miFuncion, param) => {
    console.log('Hago algo...');
    miFuncion(param);
}

const saludoPersona = (nombre) => console.log(`Hola ${nombre}!`);
// // saludoPersona('Juan');
hagoAlgo(saludoPersona, 'Pedro');