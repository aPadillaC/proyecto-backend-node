const express = require('express');
// Para leer los datos de un formulario
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express')

const config = require('../config.js');
const user = require('./components/user/network')

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');


// ROUTER
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto ', config.api.port);
})