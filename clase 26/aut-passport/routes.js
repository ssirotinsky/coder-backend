function getRoute(req, res){
    res.send('Bienvenido!');
}

function getLogin(req, res){
    res.send('Login');
}

function postLogin(req, res){
    if (req.isAuthenticated()){
        let user = req.user;
        console.log('Usuario logueado');
        res.send(user);
    } else {
        console.log('Usuario no logueado');
        res.send('Login ok!');
    }
}

function postFailLogin(req, res){
    res.send('Error en login');
}

function getSignUp(req, res){
    res.send('Registro');
}

function postSignUp(req, res){
    let user = req.user;
    res.send('Usuario');
}

function postFailSignUp(req, res){
    res.send('Error en Registro');
}

function failRoute(req, res){
    res.status(404).send('Ruta no encontrada');
}

module.exports = {
    getRoute,
    getLogin,
    postLogin,
    postFailLogin,
    getSignUp,
    postSignUp,
    postFailSignUp,
    failRoute
}