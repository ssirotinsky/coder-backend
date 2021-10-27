const express = require('express');
const router = require('./router/usuarios');

const app = express();
app.use(express.json());
app.use('/api', router.set());

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.get('/test', (req,res)=>{
    res.send("Soy el server fake y estoy levantado...");
});
 
app.get('*', router.notFound);
app.post('*', router.notFound);
app.put('*', router.notFound);
app.delete('*', router.notFound);