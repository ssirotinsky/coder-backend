
function getLogout(req, res){
    req.logout();
    res.redirect('/');
}

function failRoute(req, res){
    res.status(404).send('Ruta no encontrada');
}

function getRutaProtegida(req, res){
    res.send('<h1>Pude ingresar a la ruta protegida</h1>');
}

function getDatos(req,res){
    if (req.isAuthenticated()) {
        let user = req.user;
        res.json({user});
    } else {
        res.redirect('/index.html');
    }
}

module.exports = {
    getLogout,
    getRutaProtegida,
    getDatos,
    failRoute
}