const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/bodega/bodega');

//listar bodega
router.get('/api/bodega', api.list);

//listar uno
router.get('/api/bodega/:id', api.list_one);

//crear 
router.post('/api/bodega', api.create);

//actualizar
router.put('/api/bodega/:id', api.update);

//eliminar
router.delete('/api/bodega/:id', api.delete);

module.exports = router;
