const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/persona/persona');

//listar paises
router.get('/api/persona', api.list);

//listar uno
router.get('/api/persona/:id', api.list_one);

//crear 
router.post('/api/persona', api.create);

//actualizar
router.put('/api/persona/:id', api.update);

//eliminar
router.delete('/api/persona/:id', api.delete);

module.exports = router;
