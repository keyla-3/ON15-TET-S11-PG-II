const express = require('express');
const controller = require('../controller/academia');
const routes = express.Router();


routes.get('/listar', controller.listarAcademias);
routes.get('/listar/:id', controller.listarPorId);
routes.post('/criar', controller.cadastrarAcademia);


module.exports = routes;