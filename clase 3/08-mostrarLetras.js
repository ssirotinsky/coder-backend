const mostrarLetras = (param, callback) => {
    let i = 0;
    let idInterval = setInterval(
        ()=>{
            console.log(param[i++]);
            if (i == param.length) {
                clearInterval(idInterval);
                callback();
            }
        },
        1000
    )
}

const fin = () => console.log('terminé');

mostrarLetras('¡Hola!', fin);
//Dos formas de utilizar la función del setTimeout:
setTimeout(mostrarLetras, 250, 'Hola', fin);
setTimeout(()=>mostrarLetras('¡Hola!', fin), 500);