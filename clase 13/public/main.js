let socket = io();

socket.on('mensajes', (data)=>{
    render(data);
});

let render = (data) => {
    let html = data.map((e,i)=>`
        <div>
            <strong>${e.autor}</strong>
            <em>${e.texto}</em>
        </div>
    `).join(' ');
    document.getElementById("mensajes").innerHTML = html;
}

function enviarMensaje(e){
    let envio = {
        autor: document.getElementById('usuario').value,
        texto: document.getElementById('texto').value,
    }
    socket.emit('nuevo-mensaje', envio);
    return false;
}