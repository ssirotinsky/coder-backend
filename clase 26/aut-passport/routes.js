
function getLogin(req, res){
    if (req.isAuthenticated()){
        let user = req.user;
        console.log('Usuario logueado');
        res.json(user);
    } else {
        console.log('Usuario no logueado');
        res.redirect('/');
    }
}

function postLogin(req, res){
    let user = req.user;
    user.visitas++;
    res.redirect('/datos');
}

function getFailLogin(req, res){
    res.redirect('/error-login.html');
}

function getSignUp(req, res){
    res.redirect('/register.html');
}

function postSignUp(req, res){
    res.redirect('/datos');
}

function getFailSignUp(req, res){
    res.redirect('/error-signup.html');
}

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
        res.json({
            id: user._id,
            usuario: user.username,
            direccion: user.direccion,
            visitas: user.visitas
        });
    } else {
        res.redirect('/index.html');
    }
}

module.exports = {
    getLogin,
    postLogin,
    getFailLogin,
    getSignUp,
    postSignUp,
    getFailSignUp,
    getLogout,
    getRutaProtegida,
    getDatos,
    failRoute
}