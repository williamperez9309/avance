const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/clientes/clientes');

//listar clientes
router.get('/api/clientes', api.list);

//listar uno
router.get('/api/clientes/:id', api.list_one);

//crear 
router.post('/api/clientes', api.create);

//actualizar
router.put('/api/clientes/:id', api.update);

//eliminar
router.delete('/api/clientes/:id', api.delete);

module.exports = router;
