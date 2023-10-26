const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();


// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', remove);




// Listado de usuarios
function list (req, res) {

    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
};




// Ver un usuario
function get (req, res) {

    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
};




// Añadir un usuario
function upsert (req, res) {

    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res, user, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
};




// Eliminar un usuario
function remove (req, res) {

    Controller.remove(req.params.id)
    .then(() => {
        response.success(req, res, true, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
};

module.exports = router;