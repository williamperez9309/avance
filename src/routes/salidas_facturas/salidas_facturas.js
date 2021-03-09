const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/salidas_facturas/salidas_facturas');

//listar paises
router.get('/api/salidas_facturas', api.list);

//listar uno
router.get('/api/salidas_facturas/:id', api.list_one);

//crear 
router.post('/api/salidas_facturas', api.create);

//actualizar
router.put('/api/salidas_facturas/:id', api.update);

//eliminar
router.delete('/api/salidas_facturas/:id', api.delete);

module.exports = router;
