const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/tipo_documento/tipo_documento');

//listar paises
router.get('/api/tipo_documento', api.list);

//listar uno
router.get('/api/tipo_documento/:id', api.list_one);

//crear 
router.post('/api/tipo_documento', api.create);

//actualizar
router.put('/api/tipo_documento/:id', api.update);

//eliminar
router.delete('/api/tipo_documento/:id', api.delete);

module.exports = router;
