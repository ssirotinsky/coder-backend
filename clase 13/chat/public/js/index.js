const socket = io();

socket.on('mensajes', (data)=>{
    render(data);
});

let render = (data) => {
    let html = 
    data.map((m)=>`
        <div class="fila">
            <strong>${m.autor}</strong>
            <em>${m.texto}</em>
        </div>
    `).join(' ');
    document.getElementById('mensajes').innerHTML = html;
}

function envioMensaje(f){
    let autor = document.getElementById('nombre').value;
    let texto = document.getElementById('mensaje').value;
    socket.emit('nuevo', {autor, texto});
    return false;
}