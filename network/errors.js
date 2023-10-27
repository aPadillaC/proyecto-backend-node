// Gestionamos todos los errores


const response = require('./response')

function errors(err, req, res, next){
    console.error('[error]', err);

    const message = err.message || 'Error interno';
    const status = err.status || 500;

    response.error(req, res, message, status);
}

module.exports = errors;