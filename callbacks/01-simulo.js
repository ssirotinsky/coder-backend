const llamadaAPI = (callback) => {
    let misBandas = ['Europe', 'Motley Crue', 'Poison', 'Skid Row', 'Helloween'];
    setTimeout(()=>{
        let status = Math.random();
        let respuesta = {};
        let error = null;
        if (status > 0.80) {
            error = "Veo un Error en el llamado";
        } else {
            respuesta = {
                id: Math.floor(Math.random() * 10 + 1),
                banda: misBandas[Math.floor(Math.random() * 5)]
            }
        }
        callback(error, respuesta);
    },3000);
}

console.log('Inicio del Progama');

llamadaAPI((err,resp) => {
    if (err) {
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', err);
    } else {
        console.log('Recibi esta info: ', resp);
        console.log('y ahora me voy a grabarla a la base de datos...');
    }
});

console.log('Final del Progama');

