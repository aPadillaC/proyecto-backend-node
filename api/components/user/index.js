// Archivo para inyectar la bd en el controller


const store = require('../../../store/dummy');

const controller = require('./controller');


module.exports = controller(store);