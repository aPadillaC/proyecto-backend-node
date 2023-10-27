const express = require('express');

const secure = require('./secure')
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();


// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);




// Listado de usuarios
function list (req, res, next) {

    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
        .catch(next);
};




// Ver un usuario
function get (req, res, next) {

    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
        .catch(next);
};




// Añadir un usuario
function upsert (req, res, next) {

    Controller.upsert(req.body)
    .then((user) => {
        response.success(req, res, user, 200);
    })
    // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
    .catch(next);
};




// Eliminar un usuario
function remove (req, res, next) {

    Controller.remove(req.params.id)
    .then(() => {
        response.success(req, res, true, 200);
    })
    // .catch((err) => {
        //     response.error(req, res, err.message, 500);
        // });
    .catch(next);
};

module.exports = router;