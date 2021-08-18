function yendoAConsultar(valor) {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (valor == 'ok') {
                resolve('Este es el contenido de la consulta');
            } else {
                reject ('Canceló la consulta sin valor');
            }
        },2000)
    });
}

console.log('Iniciando...');
yendoAConsultar('okss')
    .then(x=>console.log('Volvió la consulta', x))
    .catch(x=>console.log('Canceló la consulta', x))
    .finally(()=>console.log('Terminó la consulta'));
console.log('Finalizando...');
