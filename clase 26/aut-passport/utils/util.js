function obtenerUsuario(usuarios, username){
    let indice = usuarios.findIndex(e=>e.username == username);
    if (indice == -1) {
        return undefined;
    } else {
        return usuarios[indice];
    }
}

function obtenerUsuarioId(usuarios, id){
    let indice = usuarios.findIndex(e=>e._id == id);
    if (indice == -1) {
        return undefined;
    } else {
        return usuarios[indice];
    }
}

function passwordValida(usuario, password){
    return usuario.password == password;
}

module.exports = {
    obtenerUsuario,
    obtenerUsuarioId,
    passwordValida
}