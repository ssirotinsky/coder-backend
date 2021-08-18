// misNumeros = [1,2,3,4,5];

// for (const numero of misNumeros) {
//     console.log(numero);
// }

const miViaje1 = new Promise ((resolve, reject)=>{
    setTimeout(()=>resolve('Todo OK Viaje 1!!!'),
    2000)
});

const miViaje2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>resolve('Todo OK Viaje 2!!!'),
    2000)
});

async function misViajes() {

    const misViajes = [miViaje1, miViaje2];
    
    // for (const viaje of misViajes) {
    //     console.log(viaje);
    // }

    for await (const viaje of misViajes) {
        console.log(viaje);
    }

}

misViajes();
