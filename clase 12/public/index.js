const socket = io();

socket.on('mi mensaje', (data) => {
    alert(data);
    socket.emit('notificacion', 'mensaje recibido exitosamente');
});

socket.on('mensajes', (data) => {
    console.log('recibiendo mensajes!', data);
});


function enviarMensaje() {
    socket.emit('mensaje', 'los saludo desde la página!');
}