const express = require('express');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/test', (req,res)=>{

    const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
    const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
    const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

    const arrSalida = Array();
    for (let i=0;i<10;i++){
        arrSalida.push(
            {
                nombre: nombres[Math.floor(Math.random() * (nombres.length - 1))],
                apellido: apellidos[Math.floor(Math.random() * (apellidos.length - 1))],
                color: colores[Math.floor(Math.random() * (colores.length - 1))]
            }
        );
    } 
    res.json({salida: arrSalida});
});