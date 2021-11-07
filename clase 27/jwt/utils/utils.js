require('dotenv').config({path: './config/.env'});
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const tokenSecretJWT = process.env.SECRET_JWT;
function generateToken(user) {
    let expireTime = process.env.EXP_JWT || '24h';
    let token = jwt.sign({data: user}, tokenSecretJWT, {expiresIn: expireTime});
    return token;
}

function encryptPassword(pass) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(pass, saltRounds);
    return hash;
}

function verifyToken(req, res, next){
    const token = req.headers.authorization;
    if (token){
        jwt.verify(token, tokenSecretJWT, (err, value)=>{
            if (err){
                res.status(401).json({error: 'Token inválido'});
            } else {
                req.user = value.data;
                next();
            }
        })
    } else {
        res.status(403).json({error: 'Debe proveer un token'});
    }
}

function validPassword(passwordUser, password){
    return bcrypt.compareSync(password , passwordUser);
}

module.exports = {
    generateToken,
    verifyToken,
    encryptPassword,
    validPassword
}