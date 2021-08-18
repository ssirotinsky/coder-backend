const miViaje1 = new Promise ((resolve, reject)=>{
    setTimeout(()=>resolve('Todo OK Viaje 1!!!'),
    2000)
});

const miViaje2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>reject('Todo OK Viaje 2!!!'),
    4000)
});

console.log('iniciando...');
Promise.allSettled([miViaje1, miViaje2])
    .then(x=>console.log('Terminé los dos viajes', x));
console.log('finalizando...');