const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error')

const secret = config.jwt.secret;


// Codifico el token
function sign(data) {
    return jwt.sign(data, secret);
}


// Verifico el token
function verify(token) {
    return jwt.verify(token, secret)
}


const check = {
    own: function(req, owner){
        
        const decoded = decodeHeader(req);
        console.log("decoded", decoded);

        // Comprobar si es o no propio
        if (decoded.id !== owner) {
            throw error('No puedes hacer esto', 401)
        }
    },
}


// Obtengo el token
function getToken(auth){

    // Evaluo si tengo token o no
    if(!auth){
        throw new Error('No viene token');
    }

    if( auth.indexOf('Bearer ') === -1){
        throw new Error('Formato inválido');

    }

    let token = auth.split(" ")[1];

    return token;
}


function decodeHeader(req) {
    
    // asigno a la variable authorization el valor en donde tendria que venir el token
    const authorization = req.headers.authorization || '';

    // asigno a token el valor devuelto de la funcion
    const token = getToken(authorization);

    //  Verificamos el token
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check
}