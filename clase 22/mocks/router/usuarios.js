const express = require('express');
const router = express.Router();
const api = require('../api/usuarios');

const notFound = (req, res) => {
    let {url, method} = req;
    res.send(`La ruta <span style="color:blue">${method}</span><span style="color:red">${url}</span> no fue definida`);
}

function set(){
    router.get('/generar/:cant?', api.generar);
    router.get('/:id?', api.get);
    router.post('/', api.post);
    router.put('/:id', api.put);
    router.delete('/:id', api.del);
    return router;
}

module.exports = {
    set,
    notFound
}