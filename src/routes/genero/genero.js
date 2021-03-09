const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/genero/genero');

//listar paises
router.get('/api/genero', api.list);

//listar uno
router.get('/api/genero/:id', api.list_one);

//crear 
router.post('/api/genero', api.create);

//actualizar
router.put('/api/genero/:id', api.update);

//eliminar
router.delete('/api/genero/:id', api.delete);

module.exports = router;
