const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/proveedores/proveedores');

//listar paises
router.get('/api/proveedores', api.list);

//listar uno
router.get('/api/proveedores/:id', api.list_one);

//crear 
router.post('/api/proveedores', api.create);

//actualizar
router.put('/api/proveedores:id', api.update);

//eliminar
router.delete('/api/proveedores/:id', api.delete);

module.exports = router;
