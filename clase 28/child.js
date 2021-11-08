let contador = 0;

process.on('message', mensaje=>{
    console.log('Mensaje del padre:', mensaje);
    setInterval(()=>process.send({contador: contador++}), 1000);
})