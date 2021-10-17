const generador = require('../generador/usuarios');
const util = require('../util');

let {usuarios} = require('../model/usuarios');

const generar = (req, res) => {
    let cant = req.params.cant || 50;
    usuarios = [];
    for (let i=0; i<cant; i++){
        let usuario = generador.get();
        usuario.id = i + 1;
        usuario.fecha = util.getFecha();
        usuarios.push(usuario);
    }
    res.send(usuarios);
}

const get = (req, res) => {
    let id = Number(req.params.id);
    if (id) {
        let index = util.getIndex(id, usuarios);
        let usuario = usuarios[index];
        res.send(usuario);
    } else {
        res.send(usuarios);
    }
}

const post = (req, res) => {
    let usuario = req.body;
    usuario.id = util.nextId(usuarios);
    usuario.fecha = util.getFecha();
    console.log(usuarios);
    usuarios.push(usuario);
    res.send(usuario);
}

const put = (req, res) => {
    let id = Number(req.params.id);
    let usuarioNuevo = req.body;
    usuarioNuevo.id = id;
    usuarioNuevo.fecha = util.getFecha();
    let index = util.getIndex(id, usuarios);
    let usuarioActual = usuarios[index];
    let usuarioActualizado = {...usuarioActual, ...usuarioNuevo};
    usuarios.splice(index, 1, usuarioActualizado);
    res.send(usuarioActualizado);
}

const del = (req, res) => {
    let id = Number(req.params.id);   
    let index = util.getIndex(id, usuarios);
    let usuario = usuarios[index];
    usuarios.splice(index, 1);
    res.send(usuario);
}

module.exports = {
    generar,
    get,
    post,
    put,
    del
}