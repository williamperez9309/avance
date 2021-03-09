const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/roles/roles');

//listar paises
router.get('/api/roles', api.list);

//listar uno
router.get('/api/roles/:id', api.list_one);

//crear 
router.post('/api/roles', api.create);

//actualizar
router.put('/api/roles/:id', api.update);

//eliminar
router.delete('/api/roles/:id', api.delete);

module.exports = router;
