const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/tipo_de_compra/tipo_de_compra');

//listar paises
router.get('/api/tipo_de_compra', api.list);

//listar uno
router.get('/api/tipo_de_compra/:id', api.list_one);

//crear 
router.post('/api/tipo_de_compra', api.create);

//actualizar
router.put('/api/tipo_de_compra/:id', api.update);

//eliminar
router.delete('/api/tipo_de_compra/:id', api.delete);

module.exports = router;
