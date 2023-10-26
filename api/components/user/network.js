const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();




// Listado de usuarios
router.get('/', (req, res) => {

    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});




// Ver un usuario
router.get('/:id', (req, res) => {

    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});




// Añadir un usuario
router.post('/upsert', (req, res) => {

    let {name} = req.body;

    Controller.post(name)
    .then((lista) => {
        response.success(req, res, lista, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
});




// Eliminar un usuario
router.delete('/remove', (req, res) => {

    Controller.delete(req.params.id)
    .then(() => {
        response.success(req, res, true, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
});

module.exports = router;