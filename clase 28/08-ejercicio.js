let salida;

process.on('exit',(code)=>{
    console.log(salida);
    if (code != 0) {
        console.log('Saliendo con error:', code);
    }
});

const tipoDato = (e)=> {
    e = e.toLowerCase();
    if (!isNaN(e)) {
        return 'number';
    } else if (e=='true' || e=='false'){
        return 'boolean';
    } else {
        return 'string';
    }
}

let numeros = process.argv.slice(2);
let tipos = numeros.map(e=>tipoDato(e));

if (numeros.length == 0) {
    salida = {
        error: {
            descripcion: 'entrada vacía'
        }
    };
    process.exit(-4);
} else {
    if (tipos.some(e=>e=='string' || e=='boolean')) {
        salida = {
            error: {
                descripcion: 'error de tipo',
                numeros,
                tipos
            }
        };
        process.exit(-5);        
    } else {
        let numerosN = numeros.map(e=>Number(e));
        salida = {
            numeros,
            promedio: numerosN.reduce((a, b) => a + b, 0) / numerosN.length, 
            max: Math.max(...numerosN),
            min: Math.min(...numerosN),
            ejecutable: process.argv[0],
            pid: process.pid
        }
    }
}


