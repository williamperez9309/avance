const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/entradas_factura/entradas_factura');

//listar paises
router.get('/api/entradas_factura', api.list);

//listar uno
router.get('/api/entradas_factura/:id', api.list_one);

//crear 
router.post('/api/entradas_factura', api.create);

//actualizar
router.put('/api/entradas_factura/:id', api.update);

//eliminar
router.delete('/api/entradas_factura/:id', api.delete);

module.exports = router;
