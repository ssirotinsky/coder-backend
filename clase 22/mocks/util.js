const getIndex = (id, usuarios) => usuarios.findIndex(usuario => usuario.id == id);

const getFecha = () => new Date().toLocaleString();

const nextId = (usuarios) => usuarios.length ? (usuarios[usuarios.length-1].id + 1) : 1;

module.exports = {
    getIndex,
    getFecha,
    nextId
}